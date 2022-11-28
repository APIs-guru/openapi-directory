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
var ListProvisioningArtifactsForServiceActionQueryParams = /** @class */ (function (_super) {
    __extends(ListProvisioningArtifactsForServiceActionQueryParams, _super);
    function ListProvisioningArtifactsForServiceActionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageToken" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionQueryParams.prototype, "pageToken", void 0);
    return ListProvisioningArtifactsForServiceActionQueryParams;
}(SpeakeasyBase));
export { ListProvisioningArtifactsForServiceActionQueryParams };
export var ListProvisioningArtifactsForServiceActionXAmzTargetEnum;
(function (ListProvisioningArtifactsForServiceActionXAmzTargetEnum) {
    ListProvisioningArtifactsForServiceActionXAmzTargetEnum["Aws242ServiceCatalogServiceListProvisioningArtifactsForServiceAction"] = "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction";
})(ListProvisioningArtifactsForServiceActionXAmzTargetEnum || (ListProvisioningArtifactsForServiceActionXAmzTargetEnum = {}));
var ListProvisioningArtifactsForServiceActionHeaders = /** @class */ (function (_super) {
    __extends(ListProvisioningArtifactsForServiceActionHeaders, _super);
    function ListProvisioningArtifactsForServiceActionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionHeaders.prototype, "xAmzTarget", void 0);
    return ListProvisioningArtifactsForServiceActionHeaders;
}(SpeakeasyBase));
export { ListProvisioningArtifactsForServiceActionHeaders };
var ListProvisioningArtifactsForServiceActionRequest = /** @class */ (function (_super) {
    __extends(ListProvisioningArtifactsForServiceActionRequest, _super);
    function ListProvisioningArtifactsForServiceActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProvisioningArtifactsForServiceActionQueryParams)
    ], ListProvisioningArtifactsForServiceActionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListProvisioningArtifactsForServiceActionHeaders)
    ], ListProvisioningArtifactsForServiceActionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListProvisioningArtifactsForServiceActionInput)
    ], ListProvisioningArtifactsForServiceActionRequest.prototype, "request", void 0);
    return ListProvisioningArtifactsForServiceActionRequest;
}(SpeakeasyBase));
export { ListProvisioningArtifactsForServiceActionRequest };
var ListProvisioningArtifactsForServiceActionResponse = /** @class */ (function (_super) {
    __extends(ListProvisioningArtifactsForServiceActionResponse, _super);
    function ListProvisioningArtifactsForServiceActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListProvisioningArtifactsForServiceActionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProvisioningArtifactsForServiceActionResponse.prototype, "invalidParametersException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProvisioningArtifactsForServiceActionOutput)
    ], ListProvisioningArtifactsForServiceActionResponse.prototype, "listProvisioningArtifactsForServiceActionOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListProvisioningArtifactsForServiceActionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListProvisioningArtifactsForServiceActionResponse.prototype, "statusCode", void 0);
    return ListProvisioningArtifactsForServiceActionResponse;
}(SpeakeasyBase));
export { ListProvisioningArtifactsForServiceActionResponse };
