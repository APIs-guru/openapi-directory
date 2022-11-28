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
import * as shared from "../shared";
var ReposUpdateStatusCheckProtectionPathParams = /** @class */ (function (_super) {
    __extends(ReposUpdateStatusCheckProtectionPathParams, _super);
    function ReposUpdateStatusCheckProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposUpdateStatusCheckProtectionPathParams.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdateStatusCheckProtectionPathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdateStatusCheckProtectionPathParams.prototype, "repo", void 0);
    return ReposUpdateStatusCheckProtectionPathParams;
}(SpeakeasyBase));
export { ReposUpdateStatusCheckProtectionPathParams };
var ReposUpdateStatusCheckProtectionRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateStatusCheckProtectionRequestBody, _super);
    function ReposUpdateStatusCheckProtectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contexts" }),
        __metadata("design:type", Array)
    ], ReposUpdateStatusCheckProtectionRequestBody.prototype, "contexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strict" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateStatusCheckProtectionRequestBody.prototype, "strict", void 0);
    return ReposUpdateStatusCheckProtectionRequestBody;
}(SpeakeasyBase));
export { ReposUpdateStatusCheckProtectionRequestBody };
var ReposUpdateStatusCheckProtectionRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateStatusCheckProtectionRequest, _super);
    function ReposUpdateStatusCheckProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposUpdateStatusCheckProtectionPathParams)
    ], ReposUpdateStatusCheckProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateStatusCheckProtectionRequestBody)
    ], ReposUpdateStatusCheckProtectionRequest.prototype, "request", void 0);
    return ReposUpdateStatusCheckProtectionRequest;
}(SpeakeasyBase));
export { ReposUpdateStatusCheckProtectionRequest };
var ReposUpdateStatusCheckProtectionResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateStatusCheckProtectionResponse, _super);
    function ReposUpdateStatusCheckProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposUpdateStatusCheckProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposUpdateStatusCheckProtectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposUpdateStatusCheckProtectionResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StatusCheckPolicy)
    ], ReposUpdateStatusCheckProtectionResponse.prototype, "statusCheckPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposUpdateStatusCheckProtectionResponse.prototype, "validationError", void 0);
    return ReposUpdateStatusCheckProtectionResponse;
}(SpeakeasyBase));
export { ReposUpdateStatusCheckProtectionResponse };
