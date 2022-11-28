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
var ChangeMailboxPasswordPathParams = /** @class */ (function (_super) {
    __extends(ChangeMailboxPasswordPathParams, _super);
    function ChangeMailboxPasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" }),
        __metadata("design:type", String)
    ], ChangeMailboxPasswordPathParams.prototype, "mailboxName", void 0);
    return ChangeMailboxPasswordPathParams;
}(SpeakeasyBase));
export { ChangeMailboxPasswordPathParams };
var ChangeMailboxPasswordQueryParams = /** @class */ (function (_super) {
    __extends(ChangeMailboxPasswordQueryParams, _super);
    function ChangeMailboxPasswordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" }),
        __metadata("design:type", String)
    ], ChangeMailboxPasswordQueryParams.prototype, "mailboxName", void 0);
    return ChangeMailboxPasswordQueryParams;
}(SpeakeasyBase));
export { ChangeMailboxPasswordQueryParams };
var ChangeMailboxPasswordRequest = /** @class */ (function (_super) {
    __extends(ChangeMailboxPasswordRequest, _super);
    function ChangeMailboxPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeMailboxPasswordPathParams)
    ], ChangeMailboxPasswordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeMailboxPasswordQueryParams)
    ], ChangeMailboxPasswordRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateMailboxPasswordRequest)
    ], ChangeMailboxPasswordRequest.prototype, "request", void 0);
    return ChangeMailboxPasswordRequest;
}(SpeakeasyBase));
export { ChangeMailboxPasswordRequest };
var ChangeMailboxPasswordResponse = /** @class */ (function (_super) {
    __extends(ChangeMailboxPasswordResponse, _super);
    function ChangeMailboxPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChangeMailboxPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChangeMailboxPasswordResponse.prototype, "statusCode", void 0);
    return ChangeMailboxPasswordResponse;
}(SpeakeasyBase));
export { ChangeMailboxPasswordResponse };
