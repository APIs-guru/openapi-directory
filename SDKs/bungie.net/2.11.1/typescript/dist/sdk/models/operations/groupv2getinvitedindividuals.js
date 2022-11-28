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
var GroupV2GetInvitedIndividualsPathParams = /** @class */ (function (_super) {
    __extends(GroupV2GetInvitedIndividualsPathParams, _super);
    function GroupV2GetInvitedIndividualsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", Number)
    ], GroupV2GetInvitedIndividualsPathParams.prototype, "groupId", void 0);
    return GroupV2GetInvitedIndividualsPathParams;
}(SpeakeasyBase));
export { GroupV2GetInvitedIndividualsPathParams };
var GroupV2GetInvitedIndividualsQueryParams = /** @class */ (function (_super) {
    __extends(GroupV2GetInvitedIndividualsQueryParams, _super);
    function GroupV2GetInvitedIndividualsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" }),
        __metadata("design:type", Number)
    ], GroupV2GetInvitedIndividualsQueryParams.prototype, "currentpage", void 0);
    return GroupV2GetInvitedIndividualsQueryParams;
}(SpeakeasyBase));
export { GroupV2GetInvitedIndividualsQueryParams };
var GroupV2GetInvitedIndividualsSecurity = /** @class */ (function (_super) {
    __extends(GroupV2GetInvitedIndividualsSecurity, _super);
    function GroupV2GetInvitedIndividualsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GroupV2GetInvitedIndividualsSecurity.prototype, "oauth2", void 0);
    return GroupV2GetInvitedIndividualsSecurity;
}(SpeakeasyBase));
export { GroupV2GetInvitedIndividualsSecurity };
var GroupV2GetInvitedIndividualsRequest = /** @class */ (function (_super) {
    __extends(GroupV2GetInvitedIndividualsRequest, _super);
    function GroupV2GetInvitedIndividualsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2GetInvitedIndividualsPathParams)
    ], GroupV2GetInvitedIndividualsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2GetInvitedIndividualsQueryParams)
    ], GroupV2GetInvitedIndividualsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupV2GetInvitedIndividualsSecurity)
    ], GroupV2GetInvitedIndividualsRequest.prototype, "security", void 0);
    return GroupV2GetInvitedIndividualsRequest;
}(SpeakeasyBase));
export { GroupV2GetInvitedIndividualsRequest };
var GroupV2GetInvitedIndividualsResponse = /** @class */ (function (_super) {
    __extends(GroupV2GetInvitedIndividualsResponse, _super);
    function GroupV2GetInvitedIndividualsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GroupV2GetInvitedIndividualsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupV2GetInvitedIndividualsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupV2GetInvitedIndividualsResponse.prototype, "statusCode", void 0);
    return GroupV2GetInvitedIndividualsResponse;
}(SpeakeasyBase));
export { GroupV2GetInvitedIndividualsResponse };
