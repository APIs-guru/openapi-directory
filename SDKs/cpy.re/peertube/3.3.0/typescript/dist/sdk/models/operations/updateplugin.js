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
var UpdatePluginRequestBody1 = /** @class */ (function (_super) {
    __extends(UpdatePluginRequestBody1, _super);
    function UpdatePluginRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=npmName" }),
        __metadata("design:type", String)
    ], UpdatePluginRequestBody1.prototype, "npmName", void 0);
    return UpdatePluginRequestBody1;
}(SpeakeasyBase));
export { UpdatePluginRequestBody1 };
var UpdatePluginRequestBody2 = /** @class */ (function (_super) {
    __extends(UpdatePluginRequestBody2, _super);
    function UpdatePluginRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], UpdatePluginRequestBody2.prototype, "path", void 0);
    return UpdatePluginRequestBody2;
}(SpeakeasyBase));
export { UpdatePluginRequestBody2 };
var UpdatePluginSecurity = /** @class */ (function (_super) {
    __extends(UpdatePluginSecurity, _super);
    function UpdatePluginSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UpdatePluginSecurity.prototype, "oAuth2", void 0);
    return UpdatePluginSecurity;
}(SpeakeasyBase));
export { UpdatePluginSecurity };
var UpdatePluginRequest = /** @class */ (function (_super) {
    __extends(UpdatePluginRequest, _super);
    function UpdatePluginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdatePluginRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePluginSecurity)
    ], UpdatePluginRequest.prototype, "security", void 0);
    return UpdatePluginRequest;
}(SpeakeasyBase));
export { UpdatePluginRequest };
var UpdatePluginResponse = /** @class */ (function (_super) {
    __extends(UpdatePluginResponse, _super);
    function UpdatePluginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePluginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePluginResponse.prototype, "statusCode", void 0);
    return UpdatePluginResponse;
}(SpeakeasyBase));
export { UpdatePluginResponse };
