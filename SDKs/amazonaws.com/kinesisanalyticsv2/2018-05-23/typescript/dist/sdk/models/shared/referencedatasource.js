var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceSchema } from "./sourceschema";
import { S3ReferenceDataSource } from "./s3referencedatasource";
// ReferenceDataSource
/**
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
**/
var ReferenceDataSource = /** @class */ (function (_super) {
    __extends(ReferenceDataSource, _super);
    function ReferenceDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReferenceSchema" }),
        __metadata("design:type", SourceSchema)
    ], ReferenceDataSource.prototype, "referenceSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3ReferenceDataSource" }),
        __metadata("design:type", S3ReferenceDataSource)
    ], ReferenceDataSource.prototype, "s3ReferenceDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TableName" }),
        __metadata("design:type", String)
    ], ReferenceDataSource.prototype, "tableName", void 0);
    return ReferenceDataSource;
}(SpeakeasyBase));
export { ReferenceDataSource };
