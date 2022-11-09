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
var PepMonitorUpdatePathParams = /** @class */ (function (_super) {
    __extends(PepMonitorUpdatePathParams, _super);
    function PepMonitorUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PepMonitorUpdatePathParams.prototype, "id", void 0);
    return PepMonitorUpdatePathParams;
}(SpeakeasyBase));
export { PepMonitorUpdatePathParams };
var PepMonitorUpdateRequestBody = /** @class */ (function (_super) {
    __extends(PepMonitorUpdateRequestBody, _super);
    function PepMonitorUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Webhook;" }),
        __metadata("design:type", String)
    ], PepMonitorUpdateRequestBody.prototype, "webhook", void 0);
    return PepMonitorUpdateRequestBody;
}(SpeakeasyBase));
export { PepMonitorUpdateRequestBody };
var PepMonitorUpdateSecurity = /** @class */ (function (_super) {
    __extends(PepMonitorUpdateSecurity, _super);
    function PepMonitorUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], PepMonitorUpdateSecurity.prototype, "userKey", void 0);
    return PepMonitorUpdateSecurity;
}(SpeakeasyBase));
export { PepMonitorUpdateSecurity };
var PepMonitorUpdateRequest = /** @class */ (function (_super) {
    __extends(PepMonitorUpdateRequest, _super);
    function PepMonitorUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PepMonitorUpdatePathParams)
    ], PepMonitorUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", PepMonitorUpdateRequestBody)
    ], PepMonitorUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PepMonitorUpdateSecurity)
    ], PepMonitorUpdateRequest.prototype, "security", void 0);
    return PepMonitorUpdateRequest;
}(SpeakeasyBase));
export { PepMonitorUpdateRequest };
var PepMonitorUpdateResponse = /** @class */ (function (_super) {
    __extends(PepMonitorUpdateResponse, _super);
    function PepMonitorUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PepMonitorUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PepMonitorUpdateResponse.prototype, "pepMonitorUpdate200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], PepMonitorUpdateResponse.prototype, "pepMonitorUpdateDefaultApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PepMonitorUpdateResponse.prototype, "statusCode", void 0);
    return PepMonitorUpdateResponse;
}(SpeakeasyBase));
export { PepMonitorUpdateResponse };
