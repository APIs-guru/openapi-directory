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
var CreateInventoryTaskHeaders = /** @class */ (function (_super) {
    __extends(CreateInventoryTaskHeaders, _super);
    function CreateInventoryTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], CreateInventoryTaskHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return CreateInventoryTaskHeaders;
}(SpeakeasyBase));
export { CreateInventoryTaskHeaders };
var CreateInventoryTaskSecurity = /** @class */ (function (_super) {
    __extends(CreateInventoryTaskSecurity, _super);
    function CreateInventoryTaskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], CreateInventoryTaskSecurity.prototype, "apiAuth", void 0);
    return CreateInventoryTaskSecurity;
}(SpeakeasyBase));
export { CreateInventoryTaskSecurity };
var CreateInventoryTaskRequest = /** @class */ (function (_super) {
    __extends(CreateInventoryTaskRequest, _super);
    function CreateInventoryTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInventoryTaskHeaders)
    ], CreateInventoryTaskRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateInventoryTaskRequest)
    ], CreateInventoryTaskRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInventoryTaskSecurity)
    ], CreateInventoryTaskRequest.prototype, "security", void 0);
    return CreateInventoryTaskRequest;
}(SpeakeasyBase));
export { CreateInventoryTaskRequest };
var CreateInventoryTaskResponse = /** @class */ (function (_super) {
    __extends(CreateInventoryTaskResponse, _super);
    function CreateInventoryTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInventoryTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInventoryTaskResponse.prototype, "statusCode", void 0);
    return CreateInventoryTaskResponse;
}(SpeakeasyBase));
export { CreateInventoryTaskResponse };
