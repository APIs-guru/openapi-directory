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
var GetServiceGraphQueryParams = /** @class */ (function (_super) {
    __extends(GetServiceGraphQueryParams, _super);
    function GetServiceGraphQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetServiceGraphQueryParams.prototype, "nextToken", void 0);
    return GetServiceGraphQueryParams;
}(SpeakeasyBase));
export { GetServiceGraphQueryParams };
var GetServiceGraphHeaders = /** @class */ (function (_super) {
    __extends(GetServiceGraphHeaders, _super);
    function GetServiceGraphHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetServiceGraphHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetServiceGraphHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetServiceGraphHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetServiceGraphHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetServiceGraphHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetServiceGraphHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetServiceGraphHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetServiceGraphHeaders;
}(SpeakeasyBase));
export { GetServiceGraphHeaders };
var GetServiceGraphRequestBody = /** @class */ (function (_super) {
    __extends(GetServiceGraphRequestBody, _super);
    function GetServiceGraphRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], GetServiceGraphRequestBody.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupARN" }),
        __metadata("design:type", String)
    ], GetServiceGraphRequestBody.prototype, "groupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupName" }),
        __metadata("design:type", String)
    ], GetServiceGraphRequestBody.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetServiceGraphRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], GetServiceGraphRequestBody.prototype, "startTime", void 0);
    return GetServiceGraphRequestBody;
}(SpeakeasyBase));
export { GetServiceGraphRequestBody };
var GetServiceGraphRequest = /** @class */ (function (_super) {
    __extends(GetServiceGraphRequest, _super);
    function GetServiceGraphRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceGraphQueryParams)
    ], GetServiceGraphRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServiceGraphHeaders)
    ], GetServiceGraphRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetServiceGraphRequestBody)
    ], GetServiceGraphRequest.prototype, "request", void 0);
    return GetServiceGraphRequest;
}(SpeakeasyBase));
export { GetServiceGraphRequest };
var GetServiceGraphResponse = /** @class */ (function (_super) {
    __extends(GetServiceGraphResponse, _super);
    function GetServiceGraphResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServiceGraphResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetServiceGraphResult)
    ], GetServiceGraphResponse.prototype, "getServiceGraphResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetServiceGraphResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServiceGraphResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetServiceGraphResponse.prototype, "throttledException", void 0);
    return GetServiceGraphResponse;
}(SpeakeasyBase));
export { GetServiceGraphResponse };
