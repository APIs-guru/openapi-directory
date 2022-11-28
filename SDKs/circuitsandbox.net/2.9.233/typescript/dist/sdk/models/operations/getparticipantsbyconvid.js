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
var GetParticipantsByConvIdPathParams = /** @class */ (function (_super) {
    __extends(GetParticipantsByConvIdPathParams, _super);
    function GetParticipantsByConvIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], GetParticipantsByConvIdPathParams.prototype, "convId", void 0);
    return GetParticipantsByConvIdPathParams;
}(SpeakeasyBase));
export { GetParticipantsByConvIdPathParams };
export var GetParticipantsByConvIdTypeEnum;
(function (GetParticipantsByConvIdTypeEnum) {
    GetParticipantsByConvIdTypeEnum["Regular"] = "REGULAR";
    GetParticipantsByConvIdTypeEnum["Moderator"] = "MODERATOR";
    GetParticipantsByConvIdTypeEnum["Guest"] = "GUEST";
    GetParticipantsByConvIdTypeEnum["Former"] = "FORMER";
    GetParticipantsByConvIdTypeEnum["Bot"] = "BOT";
})(GetParticipantsByConvIdTypeEnum || (GetParticipantsByConvIdTypeEnum = {}));
var GetParticipantsByConvIdQueryParams = /** @class */ (function (_super) {
    __extends(GetParticipantsByConvIdQueryParams, _super);
    function GetParticipantsByConvIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetParticipantsByConvIdQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetParticipantsByConvIdQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" }),
        __metadata("design:type", String)
    ], GetParticipantsByConvIdQueryParams.prototype, "searchPointer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetParticipantsByConvIdQueryParams.prototype, "type", void 0);
    return GetParticipantsByConvIdQueryParams;
}(SpeakeasyBase));
export { GetParticipantsByConvIdQueryParams };
var GetParticipantsByConvIdSecurity = /** @class */ (function (_super) {
    __extends(GetParticipantsByConvIdSecurity, _super);
    function GetParticipantsByConvIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetParticipantsByConvIdSecurity.prototype, "oauth", void 0);
    return GetParticipantsByConvIdSecurity;
}(SpeakeasyBase));
export { GetParticipantsByConvIdSecurity };
var GetParticipantsByConvIdRequest = /** @class */ (function (_super) {
    __extends(GetParticipantsByConvIdRequest, _super);
    function GetParticipantsByConvIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetParticipantsByConvIdPathParams)
    ], GetParticipantsByConvIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetParticipantsByConvIdQueryParams)
    ], GetParticipantsByConvIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetParticipantsByConvIdSecurity)
    ], GetParticipantsByConvIdRequest.prototype, "security", void 0);
    return GetParticipantsByConvIdRequest;
}(SpeakeasyBase));
export { GetParticipantsByConvIdRequest };
var GetParticipantsByConvIdResponse = /** @class */ (function (_super) {
    __extends(GetParticipantsByConvIdResponse, _super);
    function GetParticipantsByConvIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetParticipantsByConvIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetParticipantsByConvIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetParticipantsByConvIdResponse.prototype, "conversationParticipantsLists", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetParticipantsByConvIdResponse.prototype, "statusCode", void 0);
    return GetParticipantsByConvIdResponse;
}(SpeakeasyBase));
export { GetParticipantsByConvIdResponse };
