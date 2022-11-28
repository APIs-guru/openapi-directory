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
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { TrialSource } from "./trialsource";
var DescribeTrialResponse = /** @class */ (function (_super) {
    __extends(DescribeTrialResponse, _super);
    function DescribeTrialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedBy" }),
        __metadata("design:type", UserContext)
    ], DescribeTrialResponse.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeTrialResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], DescribeTrialResponse.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExperimentName" }),
        __metadata("design:type", String)
    ], DescribeTrialResponse.prototype, "experimentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedBy" }),
        __metadata("design:type", UserContext)
    ], DescribeTrialResponse.prototype, "lastModifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], DescribeTrialResponse.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataProperties" }),
        __metadata("design:type", MetadataProperties)
    ], DescribeTrialResponse.prototype, "metadataProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Source" }),
        __metadata("design:type", TrialSource)
    ], DescribeTrialResponse.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialArn" }),
        __metadata("design:type", String)
    ], DescribeTrialResponse.prototype, "trialArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialName" }),
        __metadata("design:type", String)
    ], DescribeTrialResponse.prototype, "trialName", void 0);
    return DescribeTrialResponse;
}(SpeakeasyBase));
export { DescribeTrialResponse };
