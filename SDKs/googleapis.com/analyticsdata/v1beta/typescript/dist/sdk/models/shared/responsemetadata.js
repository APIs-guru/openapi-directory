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
import { SchemaRestrictionResponse } from "./schemarestrictionresponse";
// ResponseMetaData
/**
 * Response's metadata carrying additional information about the report content.
**/
var ResponseMetaData = /** @class */ (function (_super) {
    __extends(ResponseMetaData, _super);
    function ResponseMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], ResponseMetaData.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataLossFromOtherRow" }),
        __metadata("design:type", Boolean)
    ], ResponseMetaData.prototype, "dataLossFromOtherRow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emptyReason" }),
        __metadata("design:type", String)
    ], ResponseMetaData.prototype, "emptyReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemaRestrictionResponse" }),
        __metadata("design:type", SchemaRestrictionResponse)
    ], ResponseMetaData.prototype, "schemaRestrictionResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subjectToThresholding" }),
        __metadata("design:type", Boolean)
    ], ResponseMetaData.prototype, "subjectToThresholding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], ResponseMetaData.prototype, "timeZone", void 0);
    return ResponseMetaData;
}(SpeakeasyBase));
export { ResponseMetaData };
