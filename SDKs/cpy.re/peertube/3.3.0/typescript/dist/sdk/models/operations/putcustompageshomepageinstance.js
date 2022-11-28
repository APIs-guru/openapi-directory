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
var PutCustomPagesHomepageInstanceRequestBody = /** @class */ (function (_super) {
    __extends(PutCustomPagesHomepageInstanceRequestBody, _super);
    function PutCustomPagesHomepageInstanceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], PutCustomPagesHomepageInstanceRequestBody.prototype, "content", void 0);
    return PutCustomPagesHomepageInstanceRequestBody;
}(SpeakeasyBase));
export { PutCustomPagesHomepageInstanceRequestBody };
var PutCustomPagesHomepageInstanceSecurity = /** @class */ (function (_super) {
    __extends(PutCustomPagesHomepageInstanceSecurity, _super);
    function PutCustomPagesHomepageInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PutCustomPagesHomepageInstanceSecurity.prototype, "oAuth2", void 0);
    return PutCustomPagesHomepageInstanceSecurity;
}(SpeakeasyBase));
export { PutCustomPagesHomepageInstanceSecurity };
var PutCustomPagesHomepageInstanceRequest = /** @class */ (function (_super) {
    __extends(PutCustomPagesHomepageInstanceRequest, _super);
    function PutCustomPagesHomepageInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutCustomPagesHomepageInstanceRequestBody)
    ], PutCustomPagesHomepageInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCustomPagesHomepageInstanceSecurity)
    ], PutCustomPagesHomepageInstanceRequest.prototype, "security", void 0);
    return PutCustomPagesHomepageInstanceRequest;
}(SpeakeasyBase));
export { PutCustomPagesHomepageInstanceRequest };
var PutCustomPagesHomepageInstanceResponse = /** @class */ (function (_super) {
    __extends(PutCustomPagesHomepageInstanceResponse, _super);
    function PutCustomPagesHomepageInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCustomPagesHomepageInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCustomPagesHomepageInstanceResponse.prototype, "statusCode", void 0);
    return PutCustomPagesHomepageInstanceResponse;
}(SpeakeasyBase));
export { PutCustomPagesHomepageInstanceResponse };
