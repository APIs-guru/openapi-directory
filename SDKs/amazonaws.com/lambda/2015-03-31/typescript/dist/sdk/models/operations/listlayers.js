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
export var ListLayersCompatibleRuntimeEnum;
(function (ListLayersCompatibleRuntimeEnum) {
    ListLayersCompatibleRuntimeEnum["Nodejs"] = "nodejs";
    ListLayersCompatibleRuntimeEnum["Nodejs43"] = "nodejs4.3";
    ListLayersCompatibleRuntimeEnum["Nodejs610"] = "nodejs6.10";
    ListLayersCompatibleRuntimeEnum["Nodejs810"] = "nodejs8.10";
    ListLayersCompatibleRuntimeEnum["Nodejs10X"] = "nodejs10.x";
    ListLayersCompatibleRuntimeEnum["Nodejs12X"] = "nodejs12.x";
    ListLayersCompatibleRuntimeEnum["Nodejs14X"] = "nodejs14.x";
    ListLayersCompatibleRuntimeEnum["Java8"] = "java8";
    ListLayersCompatibleRuntimeEnum["Java8Al2"] = "java8.al2";
    ListLayersCompatibleRuntimeEnum["Java11"] = "java11";
    ListLayersCompatibleRuntimeEnum["Python27"] = "python2.7";
    ListLayersCompatibleRuntimeEnum["Python36"] = "python3.6";
    ListLayersCompatibleRuntimeEnum["Python37"] = "python3.7";
    ListLayersCompatibleRuntimeEnum["Python38"] = "python3.8";
    ListLayersCompatibleRuntimeEnum["Python39"] = "python3.9";
    ListLayersCompatibleRuntimeEnum["Dotnetcore10"] = "dotnetcore1.0";
    ListLayersCompatibleRuntimeEnum["Dotnetcore20"] = "dotnetcore2.0";
    ListLayersCompatibleRuntimeEnum["Dotnetcore21"] = "dotnetcore2.1";
    ListLayersCompatibleRuntimeEnum["Dotnetcore31"] = "dotnetcore3.1";
    ListLayersCompatibleRuntimeEnum["Nodejs43Edge"] = "nodejs4.3-edge";
    ListLayersCompatibleRuntimeEnum["Go1X"] = "go1.x";
    ListLayersCompatibleRuntimeEnum["Ruby25"] = "ruby2.5";
    ListLayersCompatibleRuntimeEnum["Ruby27"] = "ruby2.7";
    ListLayersCompatibleRuntimeEnum["Provided"] = "provided";
    ListLayersCompatibleRuntimeEnum["ProvidedAl2"] = "provided.al2";
})(ListLayersCompatibleRuntimeEnum || (ListLayersCompatibleRuntimeEnum = {}));
var ListLayersQueryParams = /** @class */ (function (_super) {
    __extends(ListLayersQueryParams, _super);
    function ListLayersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=CompatibleRuntime" }),
        __metadata("design:type", String)
    ], ListLayersQueryParams.prototype, "compatibleRuntime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], ListLayersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], ListLayersQueryParams.prototype, "maxItems", void 0);
    return ListLayersQueryParams;
}(SpeakeasyBase));
export { ListLayersQueryParams };
var ListLayersHeaders = /** @class */ (function (_super) {
    __extends(ListLayersHeaders, _super);
    function ListLayersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListLayersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListLayersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListLayersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListLayersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListLayersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListLayersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListLayersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListLayersHeaders;
}(SpeakeasyBase));
export { ListLayersHeaders };
var ListLayersRequest = /** @class */ (function (_super) {
    __extends(ListLayersRequest, _super);
    function ListLayersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListLayersQueryParams)
    ], ListLayersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListLayersHeaders)
    ], ListLayersRequest.prototype, "headers", void 0);
    return ListLayersRequest;
}(SpeakeasyBase));
export { ListLayersRequest };
var ListLayersResponse = /** @class */ (function (_super) {
    __extends(ListLayersResponse, _super);
    function ListLayersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListLayersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLayersResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListLayersResponse)
    ], ListLayersResponse.prototype, "listLayersResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLayersResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListLayersResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListLayersResponse.prototype, "tooManyRequestsException", void 0);
    return ListLayersResponse;
}(SpeakeasyBase));
export { ListLayersResponse };
