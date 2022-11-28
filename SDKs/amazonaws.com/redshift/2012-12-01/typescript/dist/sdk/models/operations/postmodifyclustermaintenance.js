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
export var PostModifyClusterMaintenanceActionEnum;
(function (PostModifyClusterMaintenanceActionEnum) {
    PostModifyClusterMaintenanceActionEnum["ModifyClusterMaintenance"] = "ModifyClusterMaintenance";
})(PostModifyClusterMaintenanceActionEnum || (PostModifyClusterMaintenanceActionEnum = {}));
export var PostModifyClusterMaintenanceVersionEnum;
(function (PostModifyClusterMaintenanceVersionEnum) {
    PostModifyClusterMaintenanceVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostModifyClusterMaintenanceVersionEnum || (PostModifyClusterMaintenanceVersionEnum = {}));
var PostModifyClusterMaintenanceQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyClusterMaintenanceQueryParams, _super);
    function PostModifyClusterMaintenanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceQueryParams.prototype, "version", void 0);
    return PostModifyClusterMaintenanceQueryParams;
}(SpeakeasyBase));
export { PostModifyClusterMaintenanceQueryParams };
var PostModifyClusterMaintenanceHeaders = /** @class */ (function (_super) {
    __extends(PostModifyClusterMaintenanceHeaders, _super);
    function PostModifyClusterMaintenanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyClusterMaintenanceHeaders;
}(SpeakeasyBase));
export { PostModifyClusterMaintenanceHeaders };
var PostModifyClusterMaintenanceRequest = /** @class */ (function (_super) {
    __extends(PostModifyClusterMaintenanceRequest, _super);
    function PostModifyClusterMaintenanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyClusterMaintenanceQueryParams)
    ], PostModifyClusterMaintenanceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostModifyClusterMaintenanceHeaders)
    ], PostModifyClusterMaintenanceRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyClusterMaintenanceRequest.prototype, "request", void 0);
    return PostModifyClusterMaintenanceRequest;
}(SpeakeasyBase));
export { PostModifyClusterMaintenanceRequest };
var PostModifyClusterMaintenanceResponse = /** @class */ (function (_super) {
    __extends(PostModifyClusterMaintenanceResponse, _super);
    function PostModifyClusterMaintenanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostModifyClusterMaintenanceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostModifyClusterMaintenanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostModifyClusterMaintenanceResponse.prototype, "statusCode", void 0);
    return PostModifyClusterMaintenanceResponse;
}(SpeakeasyBase));
export { PostModifyClusterMaintenanceResponse };
