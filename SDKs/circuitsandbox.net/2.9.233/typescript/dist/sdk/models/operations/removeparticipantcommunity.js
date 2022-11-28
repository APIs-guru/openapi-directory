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
var RemoveParticipantCommunityPathParams = /** @class */ (function (_super) {
    __extends(RemoveParticipantCommunityPathParams, _super);
    function RemoveParticipantCommunityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], RemoveParticipantCommunityPathParams.prototype, "convId", void 0);
    return RemoveParticipantCommunityPathParams;
}(SpeakeasyBase));
export { RemoveParticipantCommunityPathParams };
var RemoveParticipantCommunityQueryParams = /** @class */ (function (_super) {
    __extends(RemoveParticipantCommunityQueryParams, _super);
    function RemoveParticipantCommunityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=participants" }),
        __metadata("design:type", Array)
    ], RemoveParticipantCommunityQueryParams.prototype, "participants", void 0);
    return RemoveParticipantCommunityQueryParams;
}(SpeakeasyBase));
export { RemoveParticipantCommunityQueryParams };
var RemoveParticipantCommunitySecurity = /** @class */ (function (_super) {
    __extends(RemoveParticipantCommunitySecurity, _super);
    function RemoveParticipantCommunitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], RemoveParticipantCommunitySecurity.prototype, "oauth", void 0);
    return RemoveParticipantCommunitySecurity;
}(SpeakeasyBase));
export { RemoveParticipantCommunitySecurity };
var RemoveParticipantCommunityRequest = /** @class */ (function (_super) {
    __extends(RemoveParticipantCommunityRequest, _super);
    function RemoveParticipantCommunityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveParticipantCommunityPathParams)
    ], RemoveParticipantCommunityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveParticipantCommunityQueryParams)
    ], RemoveParticipantCommunityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveParticipantCommunitySecurity)
    ], RemoveParticipantCommunityRequest.prototype, "security", void 0);
    return RemoveParticipantCommunityRequest;
}(SpeakeasyBase));
export { RemoveParticipantCommunityRequest };
var RemoveParticipantCommunityResponse = /** @class */ (function (_super) {
    __extends(RemoveParticipantCommunityResponse, _super);
    function RemoveParticipantCommunityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RemoveParticipantCommunityResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveParticipantCommunityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveParticipantCommunityResponse.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveParticipantCommunityResponse.prototype, "statusCode", void 0);
    return RemoveParticipantCommunityResponse;
}(SpeakeasyBase));
export { RemoveParticipantCommunityResponse };
