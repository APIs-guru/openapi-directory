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
var RemoveModeratorsPathParams = /** @class */ (function (_super) {
    __extends(RemoveModeratorsPathParams, _super);
    function RemoveModeratorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], RemoveModeratorsPathParams.prototype, "convId", void 0);
    return RemoveModeratorsPathParams;
}(SpeakeasyBase));
export { RemoveModeratorsPathParams };
var RemoveModeratorsRequestBody = /** @class */ (function (_super) {
    __extends(RemoveModeratorsRequestBody, _super);
    function RemoveModeratorsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=moderators;" }),
        __metadata("design:type", Array)
    ], RemoveModeratorsRequestBody.prototype, "moderators", void 0);
    return RemoveModeratorsRequestBody;
}(SpeakeasyBase));
export { RemoveModeratorsRequestBody };
var RemoveModeratorsSecurity = /** @class */ (function (_super) {
    __extends(RemoveModeratorsSecurity, _super);
    function RemoveModeratorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], RemoveModeratorsSecurity.prototype, "oauth", void 0);
    return RemoveModeratorsSecurity;
}(SpeakeasyBase));
export { RemoveModeratorsSecurity };
var RemoveModeratorsRequest = /** @class */ (function (_super) {
    __extends(RemoveModeratorsRequest, _super);
    function RemoveModeratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveModeratorsPathParams)
    ], RemoveModeratorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", RemoveModeratorsRequestBody)
    ], RemoveModeratorsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveModeratorsSecurity)
    ], RemoveModeratorsRequest.prototype, "security", void 0);
    return RemoveModeratorsRequest;
}(SpeakeasyBase));
export { RemoveModeratorsRequest };
var RemoveModeratorsResponse = /** @class */ (function (_super) {
    __extends(RemoveModeratorsResponse, _super);
    function RemoveModeratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveModeratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveModeratorsResponse.prototype, "statusCode", void 0);
    return RemoveModeratorsResponse;
}(SpeakeasyBase));
export { RemoveModeratorsResponse };
