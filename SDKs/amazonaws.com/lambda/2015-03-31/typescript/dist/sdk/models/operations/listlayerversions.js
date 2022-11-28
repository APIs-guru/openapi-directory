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
var ListLayerVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListLayerVersionsPathParams, _super);
    function ListLayerVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LayerName" }),
        __metadata("design:type", String)
    ], ListLayerVersionsPathParams.prototype, "layerName", void 0);
    return ListLayerVersionsPathParams;
}(SpeakeasyBase));
export { ListLayerVersionsPathParams };
export var ListLayerVersionsCompatibleRuntimeEnum;
(function (ListLayerVersionsCompatibleRuntimeEnum) {
    ListLayerVersionsCompatibleRuntimeEnum["Nodejs"] = "nodejs";
    ListLayerVersionsCompatibleRuntimeEnum["Nodejs43"] = "nodejs4.3";
    ListLayerVersionsCompatibleRuntimeEnum["Nodejs610"] = "nodejs6.10";
    ListLayerVersionsCompatibleRuntimeEnum["Nodejs810"] = "nodejs8.10";
    ListLayerVersionsCompatibleRuntimeEnum["Nodejs10X"] = "nodejs10.x";
    ListLayerVersionsCompatibleRuntimeEnum["Nodejs12X"] = "nodejs12.x";
    ListLayerVersionsCompatibleRuntimeEnum["Nodejs14X"] = "nodejs14.x";
    ListLayerVersionsCompatibleRuntimeEnum["Java8"] = "java8";
    ListLayerVersionsCompatibleRuntimeEnum["Java8Al2"] = "java8.al2";
    ListLayerVersionsCompatibleRuntimeEnum["Java11"] = "java11";
    ListLayerVersionsCompatibleRuntimeEnum["Python27"] = "python2.7";
    ListLayerVersionsCompatibleRuntimeEnum["Python36"] = "python3.6";
    ListLayerVersionsCompatibleRuntimeEnum["Python37"] = "python3.7";
    ListLayerVersionsCompatibleRuntimeEnum["Python38"] = "python3.8";
    ListLayerVersionsCompatibleRuntimeEnum["Python39"] = "python3.9";
    ListLayerVersionsCompatibleRuntimeEnum["Dotnetcore10"] = "dotnetcore1.0";
    ListLayerVersionsCompatibleRuntimeEnum["Dotnetcore20"] = "dotnetcore2.0";
    ListLayerVersionsCompatibleRuntimeEnum["Dotnetcore21"] = "dotnetcore2.1";
    ListLayerVersionsCompatibleRuntimeEnum["Dotnetcore31"] = "dotnetcore3.1";
    ListLayerVersionsCompatibleRuntimeEnum["Nodejs43Edge"] = "nodejs4.3-edge";
    ListLayerVersionsCompatibleRuntimeEnum["Go1X"] = "go1.x";
    ListLayerVersionsCompatibleRuntimeEnum["Ruby25"] = "ruby2.5";
    ListLayerVersionsCompatibleRuntimeEnum["Ruby27"] = "ruby2.7";
    ListLayerVersionsCompatibleRuntimeEnum["Provided"] = "provided";
    ListLayerVersionsCompatibleRuntimeEnum["ProvidedAl2"] = "provided.al2";
})(ListLayerVersionsCompatibleRuntimeEnum || (ListLayerVersionsCompatibleRuntimeEnum = {}));
var ListLayerVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListLayerVersionsQueryParams, _super);
    function ListLayerVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CompatibleRuntime" }),
        __metadata("design:type", String)
    ], ListLayerVersionsQueryParams.prototype, "compatibleRuntime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListLayerVersionsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], ListLayerVersionsQueryParams.prototype, "maxItems", void 0);
    return ListLayerVersionsQueryParams;
}(SpeakeasyBase));
export { ListLayerVersionsQueryParams };
var ListLayerVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListLayerVersionsHeaders, _super);
    function ListLayerVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLayerVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLayerVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLayerVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLayerVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLayerVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLayerVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLayerVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListLayerVersionsHeaders;
}(SpeakeasyBase));
export { ListLayerVersionsHeaders };
var ListLayerVersionsRequest = /** @class */ (function (_super) {
    __extends(ListLayerVersionsRequest, _super);
    function ListLayerVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLayerVersionsPathParams)
    ], ListLayerVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLayerVersionsQueryParams)
    ], ListLayerVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLayerVersionsHeaders)
    ], ListLayerVersionsRequest.prototype, "headers", void 0);
    return ListLayerVersionsRequest;
}(SpeakeasyBase));
export { ListLayerVersionsRequest };
var ListLayerVersionsResponse = /** @class */ (function (_super) {
    __extends(ListLayerVersionsResponse, _super);
    function ListLayerVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLayerVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLayerVersionsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLayerVersionsResponse)
    ], ListLayerVersionsResponse.prototype, "listLayerVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLayerVersionsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLayerVersionsResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListLayerVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListLayerVersionsResponse.prototype, "tooManyRequestsException", void 0);
    return ListLayerVersionsResponse;
}(SpeakeasyBase));
export { ListLayerVersionsResponse };
