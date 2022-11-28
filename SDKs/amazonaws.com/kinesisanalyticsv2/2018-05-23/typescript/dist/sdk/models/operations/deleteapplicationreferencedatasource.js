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
export var DeleteApplicationReferenceDataSourceXAmzTargetEnum;
(function (DeleteApplicationReferenceDataSourceXAmzTargetEnum) {
    DeleteApplicationReferenceDataSourceXAmzTargetEnum["KinesisAnalytics20180523DeleteApplicationReferenceDataSource"] = "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource";
})(DeleteApplicationReferenceDataSourceXAmzTargetEnum || (DeleteApplicationReferenceDataSourceXAmzTargetEnum = {}));
var DeleteApplicationReferenceDataSourceHeaders = /** @class */ (function (_super) {
    __extends(DeleteApplicationReferenceDataSourceHeaders, _super);
    function DeleteApplicationReferenceDataSourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceHeaders.prototype, "xAmzTarget", void 0);
    return DeleteApplicationReferenceDataSourceHeaders;
}(SpeakeasyBase));
export { DeleteApplicationReferenceDataSourceHeaders };
var DeleteApplicationReferenceDataSourceRequest = /** @class */ (function (_super) {
    __extends(DeleteApplicationReferenceDataSourceRequest, _super);
    function DeleteApplicationReferenceDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApplicationReferenceDataSourceHeaders)
    ], DeleteApplicationReferenceDataSourceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteApplicationReferenceDataSourceRequest)
    ], DeleteApplicationReferenceDataSourceRequest.prototype, "request", void 0);
    return DeleteApplicationReferenceDataSourceRequest;
}(SpeakeasyBase));
export { DeleteApplicationReferenceDataSourceRequest };
var DeleteApplicationReferenceDataSourceResponse = /** @class */ (function (_super) {
    __extends(DeleteApplicationReferenceDataSourceResponse, _super);
    function DeleteApplicationReferenceDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApplicationReferenceDataSourceResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteApplicationReferenceDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteApplicationReferenceDataSourceResponse)
    ], DeleteApplicationReferenceDataSourceResponse.prototype, "deleteApplicationReferenceDataSourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApplicationReferenceDataSourceResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApplicationReferenceDataSourceResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApplicationReferenceDataSourceResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApplicationReferenceDataSourceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteApplicationReferenceDataSourceResponse.prototype, "statusCode", void 0);
    return DeleteApplicationReferenceDataSourceResponse;
}(SpeakeasyBase));
export { DeleteApplicationReferenceDataSourceResponse };
