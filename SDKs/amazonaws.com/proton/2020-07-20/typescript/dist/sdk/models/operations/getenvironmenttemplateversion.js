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
export var GetEnvironmentTemplateVersionXAmzTargetEnum;
(function (GetEnvironmentTemplateVersionXAmzTargetEnum) {
    GetEnvironmentTemplateVersionXAmzTargetEnum["AwsProton20200720GetEnvironmentTemplateVersion"] = "AwsProton20200720.GetEnvironmentTemplateVersion";
})(GetEnvironmentTemplateVersionXAmzTargetEnum || (GetEnvironmentTemplateVersionXAmzTargetEnum = {}));
var GetEnvironmentTemplateVersionHeaders = /** @class */ (function (_super) {
    __extends(GetEnvironmentTemplateVersionHeaders, _super);
    function GetEnvironmentTemplateVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionHeaders.prototype, "xAmzTarget", void 0);
    return GetEnvironmentTemplateVersionHeaders;
}(SpeakeasyBase));
export { GetEnvironmentTemplateVersionHeaders };
var GetEnvironmentTemplateVersionRequest = /** @class */ (function (_super) {
    __extends(GetEnvironmentTemplateVersionRequest, _super);
    function GetEnvironmentTemplateVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEnvironmentTemplateVersionHeaders)
    ], GetEnvironmentTemplateVersionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GetEnvironmentTemplateVersionInput)
    ], GetEnvironmentTemplateVersionRequest.prototype, "request", void 0);
    return GetEnvironmentTemplateVersionRequest;
}(SpeakeasyBase));
export { GetEnvironmentTemplateVersionRequest };
var GetEnvironmentTemplateVersionResponse = /** @class */ (function (_super) {
    __extends(GetEnvironmentTemplateVersionResponse, _super);
    function GetEnvironmentTemplateVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEnvironmentTemplateVersionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEnvironmentTemplateVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetEnvironmentTemplateVersionOutput)
    ], GetEnvironmentTemplateVersionResponse.prototype, "getEnvironmentTemplateVersionOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEnvironmentTemplateVersionResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEnvironmentTemplateVersionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEnvironmentTemplateVersionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEnvironmentTemplateVersionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEnvironmentTemplateVersionResponse.prototype, "validationException", void 0);
    return GetEnvironmentTemplateVersionResponse;
}(SpeakeasyBase));
export { GetEnvironmentTemplateVersionResponse };
