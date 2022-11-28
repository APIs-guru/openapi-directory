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
var UpdateReadTimestampPathParams = /** @class */ (function (_super) {
    __extends(UpdateReadTimestampPathParams, _super);
    function UpdateReadTimestampPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateReadTimestampPathParams.prototype, "id", void 0);
    return UpdateReadTimestampPathParams;
}(SpeakeasyBase));
export { UpdateReadTimestampPathParams };
var UpdateReadTimestampRequestBody = /** @class */ (function (_super) {
    __extends(UpdateReadTimestampRequestBody, _super);
    function UpdateReadTimestampRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=timestamp;" }),
        __metadata("design:type", Date)
    ], UpdateReadTimestampRequestBody.prototype, "timestamp", void 0);
    return UpdateReadTimestampRequestBody;
}(SpeakeasyBase));
export { UpdateReadTimestampRequestBody };
var UpdateReadTimestampSecurity = /** @class */ (function (_super) {
    __extends(UpdateReadTimestampSecurity, _super);
    function UpdateReadTimestampSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateReadTimestampSecurity.prototype, "oauth", void 0);
    return UpdateReadTimestampSecurity;
}(SpeakeasyBase));
export { UpdateReadTimestampSecurity };
var UpdateReadTimestampRequest = /** @class */ (function (_super) {
    __extends(UpdateReadTimestampRequest, _super);
    function UpdateReadTimestampRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateReadTimestampPathParams)
    ], UpdateReadTimestampRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateReadTimestampRequestBody)
    ], UpdateReadTimestampRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateReadTimestampSecurity)
    ], UpdateReadTimestampRequest.prototype, "security", void 0);
    return UpdateReadTimestampRequest;
}(SpeakeasyBase));
export { UpdateReadTimestampRequest };
var UpdateReadTimestampResponse = /** @class */ (function (_super) {
    __extends(UpdateReadTimestampResponse, _super);
    function UpdateReadTimestampResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateReadTimestampResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateReadTimestampResponse.prototype, "statusCode", void 0);
    return UpdateReadTimestampResponse;
}(SpeakeasyBase));
export { UpdateReadTimestampResponse };
