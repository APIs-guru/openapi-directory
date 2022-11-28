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
var ResubscribePathParams = /** @class */ (function (_super) {
    __extends(ResubscribePathParams, _super);
    function ResubscribePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], ResubscribePathParams.prototype, "platform", void 0);
    return ResubscribePathParams;
}(SpeakeasyBase));
export { ResubscribePathParams };
var ResubscribeQueryParams = /** @class */ (function (_super) {
    __extends(ResubscribeQueryParams, _super);
    function ResubscribeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ResubscribeQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=planId" }),
        __metadata("design:type", String)
    ], ResubscribeQueryParams.prototype, "planId", void 0);
    return ResubscribeQueryParams;
}(SpeakeasyBase));
export { ResubscribeQueryParams };
var ResubscribeSecurity = /** @class */ (function (_super) {
    __extends(ResubscribeSecurity, _super);
    function ResubscribeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], ResubscribeSecurity.prototype, "accountAuth", void 0);
    return ResubscribeSecurity;
}(SpeakeasyBase));
export { ResubscribeSecurity };
var ResubscribeRequest = /** @class */ (function (_super) {
    __extends(ResubscribeRequest, _super);
    function ResubscribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResubscribePathParams)
    ], ResubscribeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResubscribeQueryParams)
    ], ResubscribeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResubscribeSecurity)
    ], ResubscribeRequest.prototype, "security", void 0);
    return ResubscribeRequest;
}(SpeakeasyBase));
export { ResubscribeRequest };
var ResubscribeResponse = /** @class */ (function (_super) {
    __extends(ResubscribeResponse, _super);
    function ResubscribeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResubscribeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResubscribeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ResubscribeResponse.prototype, "resubscribe200ApplicationJsonObject", void 0);
    return ResubscribeResponse;
}(SpeakeasyBase));
export { ResubscribeResponse };
