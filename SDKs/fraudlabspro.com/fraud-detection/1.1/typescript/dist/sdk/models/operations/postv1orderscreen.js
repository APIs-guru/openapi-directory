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
export var PostV1OrderScreenFormatEnum;
(function (PostV1OrderScreenFormatEnum) {
    PostV1OrderScreenFormatEnum["Json"] = "json";
    PostV1OrderScreenFormatEnum["Xml"] = "xml";
})(PostV1OrderScreenFormatEnum || (PostV1OrderScreenFormatEnum = {}));
var PostV1OrderScreenQueryParams = /** @class */ (function (_super) {
    __extends(PostV1OrderScreenQueryParams, _super);
    function PostV1OrderScreenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=amount" }),
        __metadata("design:type", Number)
    ], PostV1OrderScreenQueryParams.prototype, "amount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=avs_result" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "avsResult", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bill_addr" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "billAddr", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bill_city" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "billCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bill_country" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "billCountry", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bill_state" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "billState", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bill_zip_code" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "billZipCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bin_no" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "binNo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=card_hash" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "cardHash", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currency" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=cvv_result" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "cvvResult", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=department" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "department", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email_domain" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "emailDomain", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email_hash" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "emailHash", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=first_name" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "firstName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=flp_checksum" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "flpChecksum", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ip" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "ip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=last_name" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "lastName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=password_hash" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "passwordHash", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=payment_mode" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "paymentMode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quantity" }),
        __metadata("design:type", Number)
    ], PostV1OrderScreenQueryParams.prototype, "quantity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ship_addr" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "shipAddr", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ship_city" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "shipCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ship_country" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "shipCountry", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ship_state" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "shipState", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ship_zip_code" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "shipZipCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=user_order_id" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "userOrderId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=user_order_memo" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "userOrderMemo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=user_phone" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "userPhone", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=username_hash" }),
        __metadata("design:type", String)
    ], PostV1OrderScreenQueryParams.prototype, "usernameHash", void 0);
    return PostV1OrderScreenQueryParams;
}(SpeakeasyBase));
export { PostV1OrderScreenQueryParams };
var PostV1OrderScreenRequest = /** @class */ (function (_super) {
    __extends(PostV1OrderScreenRequest, _super);
    function PostV1OrderScreenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostV1OrderScreenQueryParams)
    ], PostV1OrderScreenRequest.prototype, "queryParams", void 0);
    return PostV1OrderScreenRequest;
}(SpeakeasyBase));
export { PostV1OrderScreenRequest };
var PostV1OrderScreenResponse = /** @class */ (function (_super) {
    __extends(PostV1OrderScreenResponse, _super);
    function PostV1OrderScreenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostV1OrderScreenResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostV1OrderScreenResponse.prototype, "postV1OrderScreen200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostV1OrderScreenResponse.prototype, "statusCode", void 0);
    return PostV1OrderScreenResponse;
}(SpeakeasyBase));
export { PostV1OrderScreenResponse };
