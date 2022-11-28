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
var ConfigureMailboxAutoForwardPathParams = /** @class */ (function (_super) {
    __extends(ConfigureMailboxAutoForwardPathParams, _super);
    function ConfigureMailboxAutoForwardPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" }),
        __metadata("design:type", String)
    ], ConfigureMailboxAutoForwardPathParams.prototype, "mailboxName", void 0);
    return ConfigureMailboxAutoForwardPathParams;
}(SpeakeasyBase));
export { ConfigureMailboxAutoForwardPathParams };
var ConfigureMailboxAutoForwardQueryParams = /** @class */ (function (_super) {
    __extends(ConfigureMailboxAutoForwardQueryParams, _super);
    function ConfigureMailboxAutoForwardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" }),
        __metadata("design:type", String)
    ], ConfigureMailboxAutoForwardQueryParams.prototype, "mailboxName", void 0);
    return ConfigureMailboxAutoForwardQueryParams;
}(SpeakeasyBase));
export { ConfigureMailboxAutoForwardQueryParams };
var ConfigureMailboxAutoForwardRequest = /** @class */ (function (_super) {
    __extends(ConfigureMailboxAutoForwardRequest, _super);
    function ConfigureMailboxAutoForwardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigureMailboxAutoForwardPathParams)
    ], ConfigureMailboxAutoForwardRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfigureMailboxAutoForwardQueryParams)
    ], ConfigureMailboxAutoForwardRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AutoForward)
    ], ConfigureMailboxAutoForwardRequest.prototype, "request", void 0);
    return ConfigureMailboxAutoForwardRequest;
}(SpeakeasyBase));
export { ConfigureMailboxAutoForwardRequest };
var ConfigureMailboxAutoForwardResponse = /** @class */ (function (_super) {
    __extends(ConfigureMailboxAutoForwardResponse, _super);
    function ConfigureMailboxAutoForwardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfigureMailboxAutoForwardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfigureMailboxAutoForwardResponse.prototype, "statusCode", void 0);
    return ConfigureMailboxAutoForwardResponse;
}(SpeakeasyBase));
export { ConfigureMailboxAutoForwardResponse };
