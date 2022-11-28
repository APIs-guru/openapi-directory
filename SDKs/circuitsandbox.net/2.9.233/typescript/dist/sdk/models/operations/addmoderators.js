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
var AddModeratorsPathParams = /** @class */ (function (_super) {
    __extends(AddModeratorsPathParams, _super);
    function AddModeratorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], AddModeratorsPathParams.prototype, "convId", void 0);
    return AddModeratorsPathParams;
}(SpeakeasyBase));
export { AddModeratorsPathParams };
var AddModeratorsRequestBody = /** @class */ (function (_super) {
    __extends(AddModeratorsRequestBody, _super);
    function AddModeratorsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=moderators;" }),
        __metadata("design:type", Array)
    ], AddModeratorsRequestBody.prototype, "moderators", void 0);
    return AddModeratorsRequestBody;
}(SpeakeasyBase));
export { AddModeratorsRequestBody };
var AddModeratorsSecurity = /** @class */ (function (_super) {
    __extends(AddModeratorsSecurity, _super);
    function AddModeratorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddModeratorsSecurity.prototype, "oauth", void 0);
    return AddModeratorsSecurity;
}(SpeakeasyBase));
export { AddModeratorsSecurity };
var AddModeratorsRequest = /** @class */ (function (_super) {
    __extends(AddModeratorsRequest, _super);
    function AddModeratorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddModeratorsPathParams)
    ], AddModeratorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AddModeratorsRequestBody)
    ], AddModeratorsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddModeratorsSecurity)
    ], AddModeratorsRequest.prototype, "security", void 0);
    return AddModeratorsRequest;
}(SpeakeasyBase));
export { AddModeratorsRequest };
var AddModeratorsResponse = /** @class */ (function (_super) {
    __extends(AddModeratorsResponse, _super);
    function AddModeratorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddModeratorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddModeratorsResponse.prototype, "statusCode", void 0);
    return AddModeratorsResponse;
}(SpeakeasyBase));
export { AddModeratorsResponse };
