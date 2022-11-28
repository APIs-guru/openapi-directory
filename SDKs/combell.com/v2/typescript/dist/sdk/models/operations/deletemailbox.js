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
var DeleteMailboxPathParams = /** @class */ (function (_super) {
    __extends(DeleteMailboxPathParams, _super);
    function DeleteMailboxPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mailboxName" }),
        __metadata("design:type", String)
    ], DeleteMailboxPathParams.prototype, "mailboxName", void 0);
    return DeleteMailboxPathParams;
}(SpeakeasyBase));
export { DeleteMailboxPathParams };
var DeleteMailboxQueryParams = /** @class */ (function (_super) {
    __extends(DeleteMailboxQueryParams, _super);
    function DeleteMailboxQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mailbox_name" }),
        __metadata("design:type", String)
    ], DeleteMailboxQueryParams.prototype, "mailboxName", void 0);
    return DeleteMailboxQueryParams;
}(SpeakeasyBase));
export { DeleteMailboxQueryParams };
var DeleteMailboxRequest = /** @class */ (function (_super) {
    __extends(DeleteMailboxRequest, _super);
    function DeleteMailboxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMailboxPathParams)
    ], DeleteMailboxRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMailboxQueryParams)
    ], DeleteMailboxRequest.prototype, "queryParams", void 0);
    return DeleteMailboxRequest;
}(SpeakeasyBase));
export { DeleteMailboxRequest };
var DeleteMailboxResponse = /** @class */ (function (_super) {
    __extends(DeleteMailboxResponse, _super);
    function DeleteMailboxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMailboxResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMailboxResponse.prototype, "statusCode", void 0);
    return DeleteMailboxResponse;
}(SpeakeasyBase));
export { DeleteMailboxResponse };
