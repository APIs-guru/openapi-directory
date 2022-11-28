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
var V2UpdateWelcomeBoxContentPathParams = /** @class */ (function (_super) {
    __extends(V2UpdateWelcomeBoxContentPathParams, _super);
    function V2UpdateWelcomeBoxContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=content" }),
        __metadata("design:type", String)
    ], V2UpdateWelcomeBoxContentPathParams.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" }),
        __metadata("design:type", String)
    ], V2UpdateWelcomeBoxContentPathParams.prototype, "spaceId", void 0);
    return V2UpdateWelcomeBoxContentPathParams;
}(SpeakeasyBase));
export { V2UpdateWelcomeBoxContentPathParams };
var V2UpdateWelcomeBoxContentRequestBody = /** @class */ (function (_super) {
    __extends(V2UpdateWelcomeBoxContentRequestBody, _super);
    function V2UpdateWelcomeBoxContentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=displayWelcomeBox;" }),
        __metadata("design:type", Boolean)
    ], V2UpdateWelcomeBoxContentRequestBody.prototype, "displayWelcomeBox", void 0);
    return V2UpdateWelcomeBoxContentRequestBody;
}(SpeakeasyBase));
export { V2UpdateWelcomeBoxContentRequestBody };
var V2UpdateWelcomeBoxContentSecurity = /** @class */ (function (_super) {
    __extends(V2UpdateWelcomeBoxContentSecurity, _super);
    function V2UpdateWelcomeBoxContentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], V2UpdateWelcomeBoxContentSecurity.prototype, "oauth", void 0);
    return V2UpdateWelcomeBoxContentSecurity;
}(SpeakeasyBase));
export { V2UpdateWelcomeBoxContentSecurity };
var V2UpdateWelcomeBoxContentRequest = /** @class */ (function (_super) {
    __extends(V2UpdateWelcomeBoxContentRequest, _super);
    function V2UpdateWelcomeBoxContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", V2UpdateWelcomeBoxContentPathParams)
    ], V2UpdateWelcomeBoxContentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", V2UpdateWelcomeBoxContentRequestBody)
    ], V2UpdateWelcomeBoxContentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", V2UpdateWelcomeBoxContentSecurity)
    ], V2UpdateWelcomeBoxContentRequest.prototype, "security", void 0);
    return V2UpdateWelcomeBoxContentRequest;
}(SpeakeasyBase));
export { V2UpdateWelcomeBoxContentRequest };
var V2UpdateWelcomeBoxContentResponse = /** @class */ (function (_super) {
    __extends(V2UpdateWelcomeBoxContentResponse, _super);
    function V2UpdateWelcomeBoxContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], V2UpdateWelcomeBoxContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], V2UpdateWelcomeBoxContentResponse.prototype, "statusCode", void 0);
    return V2UpdateWelcomeBoxContentResponse;
}(SpeakeasyBase));
export { V2UpdateWelcomeBoxContentResponse };
