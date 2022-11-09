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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetSchema } from "./datasetschema";
var CreateDatasetRequest = /** @class */ (function (_super) {
    __extends(CreateDatasetRequest, _super);
    function CreateDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClientToken" }),
        __metadata("design:type", String)
    ], CreateDatasetRequest.prototype, "clientToken", void 0);
    __decorate([
        Metadata({ data: "json, name=DatasetName" }),
        __metadata("design:type", String)
    ], CreateDatasetRequest.prototype, "datasetName", void 0);
    __decorate([
        Metadata({ data: "json, name=DatasetSchema" }),
        __metadata("design:type", DatasetSchema)
    ], CreateDatasetRequest.prototype, "datasetSchema", void 0);
    __decorate([
        Metadata({ data: "json, name=ServerSideKmsKeyId" }),
        __metadata("design:type", String)
    ], CreateDatasetRequest.prototype, "serverSideKmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateDatasetRequest.prototype, "tags", void 0);
    return CreateDatasetRequest;
}(SpeakeasyBase));
export { CreateDatasetRequest };
