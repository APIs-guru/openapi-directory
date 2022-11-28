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
var DelMirroredVideoPathParams = /** @class */ (function (_super) {
    __extends(DelMirroredVideoPathParams, _super);
    function DelMirroredVideoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=redundancyId" }),
        __metadata("design:type", String)
    ], DelMirroredVideoPathParams.prototype, "redundancyId", void 0);
    return DelMirroredVideoPathParams;
}(SpeakeasyBase));
export { DelMirroredVideoPathParams };
var DelMirroredVideoSecurity = /** @class */ (function (_super) {
    __extends(DelMirroredVideoSecurity, _super);
    function DelMirroredVideoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DelMirroredVideoSecurity.prototype, "oAuth2", void 0);
    return DelMirroredVideoSecurity;
}(SpeakeasyBase));
export { DelMirroredVideoSecurity };
var DelMirroredVideoRequest = /** @class */ (function (_super) {
    __extends(DelMirroredVideoRequest, _super);
    function DelMirroredVideoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DelMirroredVideoPathParams)
    ], DelMirroredVideoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DelMirroredVideoSecurity)
    ], DelMirroredVideoRequest.prototype, "security", void 0);
    return DelMirroredVideoRequest;
}(SpeakeasyBase));
export { DelMirroredVideoRequest };
var DelMirroredVideoResponse = /** @class */ (function (_super) {
    __extends(DelMirroredVideoResponse, _super);
    function DelMirroredVideoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DelMirroredVideoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DelMirroredVideoResponse.prototype, "statusCode", void 0);
    return DelMirroredVideoResponse;
}(SpeakeasyBase));
export { DelMirroredVideoResponse };
