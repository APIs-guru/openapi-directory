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
export var AddApplicationReferenceDataSourceXAmzTargetEnum;
(function (AddApplicationReferenceDataSourceXAmzTargetEnum) {
    AddApplicationReferenceDataSourceXAmzTargetEnum["KinesisAnalytics20150814AddApplicationReferenceDataSource"] = "KinesisAnalytics_20150814.AddApplicationReferenceDataSource";
})(AddApplicationReferenceDataSourceXAmzTargetEnum || (AddApplicationReferenceDataSourceXAmzTargetEnum = {}));
var AddApplicationReferenceDataSourceHeaders = /** @class */ (function (_super) {
    __extends(AddApplicationReferenceDataSourceHeaders, _super);
    function AddApplicationReferenceDataSourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceHeaders.prototype, "xAmzTarget", void 0);
    return AddApplicationReferenceDataSourceHeaders;
}(SpeakeasyBase));
export { AddApplicationReferenceDataSourceHeaders };
var AddApplicationReferenceDataSourceRequest = /** @class */ (function (_super) {
    __extends(AddApplicationReferenceDataSourceRequest, _super);
    function AddApplicationReferenceDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddApplicationReferenceDataSourceHeaders)
    ], AddApplicationReferenceDataSourceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddApplicationReferenceDataSourceRequest)
    ], AddApplicationReferenceDataSourceRequest.prototype, "request", void 0);
    return AddApplicationReferenceDataSourceRequest;
}(SpeakeasyBase));
export { AddApplicationReferenceDataSourceRequest };
var AddApplicationReferenceDataSourceResponse = /** @class */ (function (_super) {
    __extends(AddApplicationReferenceDataSourceResponse, _super);
    function AddApplicationReferenceDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AddApplicationReferenceDataSourceResponse.prototype, "addApplicationReferenceDataSourceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationReferenceDataSourceResponse.prototype, "concurrentModificationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddApplicationReferenceDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationReferenceDataSourceResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationReferenceDataSourceResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationReferenceDataSourceResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddApplicationReferenceDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddApplicationReferenceDataSourceResponse.prototype, "unsupportedOperationException", void 0);
    return AddApplicationReferenceDataSourceResponse;
}(SpeakeasyBase));
export { AddApplicationReferenceDataSourceResponse };
