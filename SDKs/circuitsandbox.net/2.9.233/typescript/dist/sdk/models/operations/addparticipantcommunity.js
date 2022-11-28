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
var AddParticipantCommunityPathParams = /** @class */ (function (_super) {
    __extends(AddParticipantCommunityPathParams, _super);
    function AddParticipantCommunityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], AddParticipantCommunityPathParams.prototype, "convId", void 0);
    return AddParticipantCommunityPathParams;
}(SpeakeasyBase));
export { AddParticipantCommunityPathParams };
var AddParticipantCommunityRequestBody = /** @class */ (function (_super) {
    __extends(AddParticipantCommunityRequestBody, _super);
    function AddParticipantCommunityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=participants;" }),
        __metadata("design:type", Array)
    ], AddParticipantCommunityRequestBody.prototype, "participants", void 0);
    return AddParticipantCommunityRequestBody;
}(SpeakeasyBase));
export { AddParticipantCommunityRequestBody };
var AddParticipantCommunitySecurity = /** @class */ (function (_super) {
    __extends(AddParticipantCommunitySecurity, _super);
    function AddParticipantCommunitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AddParticipantCommunitySecurity.prototype, "oauth", void 0);
    return AddParticipantCommunitySecurity;
}(SpeakeasyBase));
export { AddParticipantCommunitySecurity };
var AddParticipantCommunityRequest = /** @class */ (function (_super) {
    __extends(AddParticipantCommunityRequest, _super);
    function AddParticipantCommunityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddParticipantCommunityPathParams)
    ], AddParticipantCommunityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", AddParticipantCommunityRequestBody)
    ], AddParticipantCommunityRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddParticipantCommunitySecurity)
    ], AddParticipantCommunityRequest.prototype, "security", void 0);
    return AddParticipantCommunityRequest;
}(SpeakeasyBase));
export { AddParticipantCommunityRequest };
var AddParticipantCommunityResponse = /** @class */ (function (_super) {
    __extends(AddParticipantCommunityResponse, _super);
    function AddParticipantCommunityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AddParticipantCommunityResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddParticipantCommunityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AddParticipantCommunityResponse.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddParticipantCommunityResponse.prototype, "statusCode", void 0);
    return AddParticipantCommunityResponse;
}(SpeakeasyBase));
export { AddParticipantCommunityResponse };
