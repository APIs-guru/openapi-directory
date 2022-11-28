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
var V2RemoveParticipantsFromSpacePathParams = /** @class */ (function (_super) {
    __extends(V2RemoveParticipantsFromSpacePathParams, _super);
    function V2RemoveParticipantsFromSpacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], V2RemoveParticipantsFromSpacePathParams.prototype, "id", void 0);
    return V2RemoveParticipantsFromSpacePathParams;
}(SpeakeasyBase));
export { V2RemoveParticipantsFromSpacePathParams };
var V2RemoveParticipantsFromSpaceRequestBody = /** @class */ (function (_super) {
    __extends(V2RemoveParticipantsFromSpaceRequestBody, _super);
    function V2RemoveParticipantsFromSpaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=userIds;" }),
        __metadata("design:type", Array)
    ], V2RemoveParticipantsFromSpaceRequestBody.prototype, "userIds", void 0);
    return V2RemoveParticipantsFromSpaceRequestBody;
}(SpeakeasyBase));
export { V2RemoveParticipantsFromSpaceRequestBody };
var V2RemoveParticipantsFromSpaceSecurity = /** @class */ (function (_super) {
    __extends(V2RemoveParticipantsFromSpaceSecurity, _super);
    function V2RemoveParticipantsFromSpaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], V2RemoveParticipantsFromSpaceSecurity.prototype, "oauth", void 0);
    return V2RemoveParticipantsFromSpaceSecurity;
}(SpeakeasyBase));
export { V2RemoveParticipantsFromSpaceSecurity };
var V2RemoveParticipantsFromSpaceRequest = /** @class */ (function (_super) {
    __extends(V2RemoveParticipantsFromSpaceRequest, _super);
    function V2RemoveParticipantsFromSpaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", V2RemoveParticipantsFromSpacePathParams)
    ], V2RemoveParticipantsFromSpaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", V2RemoveParticipantsFromSpaceRequestBody)
    ], V2RemoveParticipantsFromSpaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", V2RemoveParticipantsFromSpaceSecurity)
    ], V2RemoveParticipantsFromSpaceRequest.prototype, "security", void 0);
    return V2RemoveParticipantsFromSpaceRequest;
}(SpeakeasyBase));
export { V2RemoveParticipantsFromSpaceRequest };
var V2RemoveParticipantsFromSpaceResponse = /** @class */ (function (_super) {
    __extends(V2RemoveParticipantsFromSpaceResponse, _super);
    function V2RemoveParticipantsFromSpaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], V2RemoveParticipantsFromSpaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], V2RemoveParticipantsFromSpaceResponse.prototype, "statusCode", void 0);
    return V2RemoveParticipantsFromSpaceResponse;
}(SpeakeasyBase));
export { V2RemoveParticipantsFromSpaceResponse };
