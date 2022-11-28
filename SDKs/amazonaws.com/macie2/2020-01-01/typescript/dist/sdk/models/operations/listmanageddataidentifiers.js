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
var ListManagedDataIdentifiersHeaders = /** @class */ (function (_super) {
    __extends(ListManagedDataIdentifiersHeaders, _super);
    function ListManagedDataIdentifiersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListManagedDataIdentifiersHeaders;
}(SpeakeasyBase));
export { ListManagedDataIdentifiersHeaders };
var ListManagedDataIdentifiersRequestBody = /** @class */ (function (_super) {
    __extends(ListManagedDataIdentifiersRequestBody, _super);
    function ListManagedDataIdentifiersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersRequestBody.prototype, "nextToken", void 0);
    return ListManagedDataIdentifiersRequestBody;
}(SpeakeasyBase));
export { ListManagedDataIdentifiersRequestBody };
var ListManagedDataIdentifiersRequest = /** @class */ (function (_super) {
    __extends(ListManagedDataIdentifiersRequest, _super);
    function ListManagedDataIdentifiersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListManagedDataIdentifiersHeaders)
    ], ListManagedDataIdentifiersRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListManagedDataIdentifiersRequestBody)
    ], ListManagedDataIdentifiersRequest.prototype, "request", void 0);
    return ListManagedDataIdentifiersRequest;
}(SpeakeasyBase));
export { ListManagedDataIdentifiersRequest };
var ListManagedDataIdentifiersResponse = /** @class */ (function (_super) {
    __extends(ListManagedDataIdentifiersResponse, _super);
    function ListManagedDataIdentifiersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListManagedDataIdentifiersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListManagedDataIdentifiersResponse)
    ], ListManagedDataIdentifiersResponse.prototype, "listManagedDataIdentifiersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListManagedDataIdentifiersResponse.prototype, "statusCode", void 0);
    return ListManagedDataIdentifiersResponse;
}(SpeakeasyBase));
export { ListManagedDataIdentifiersResponse };
