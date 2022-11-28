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
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
var GetImportResponse = /** @class */ (function (_super) {
    __extends(GetImportResponse, _super);
    function GetImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdDate" }),
        __metadata("design:type", Date)
    ], GetImportResponse.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReason" }),
        __metadata("design:type", Array)
    ], GetImportResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importId" }),
        __metadata("design:type", String)
    ], GetImportResponse.prototype, "importId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importStatus" }),
        __metadata("design:type", String)
    ], GetImportResponse.prototype, "importStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeStrategy" }),
        __metadata("design:type", String)
    ], GetImportResponse.prototype, "mergeStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetImportResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], GetImportResponse.prototype, "resourceType", void 0);
    return GetImportResponse;
}(SpeakeasyBase));
export { GetImportResponse };
