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
var RemoveParticipantGroupPathParams = /** @class */ (function (_super) {
    __extends(RemoveParticipantGroupPathParams, _super);
    function RemoveParticipantGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" }),
        __metadata("design:type", String)
    ], RemoveParticipantGroupPathParams.prototype, "convId", void 0);
    return RemoveParticipantGroupPathParams;
}(SpeakeasyBase));
export { RemoveParticipantGroupPathParams };
var RemoveParticipantGroupQueryParams = /** @class */ (function (_super) {
    __extends(RemoveParticipantGroupQueryParams, _super);
    function RemoveParticipantGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=participants" }),
        __metadata("design:type", Array)
    ], RemoveParticipantGroupQueryParams.prototype, "participants", void 0);
    return RemoveParticipantGroupQueryParams;
}(SpeakeasyBase));
export { RemoveParticipantGroupQueryParams };
var RemoveParticipantGroupSecurity = /** @class */ (function (_super) {
    __extends(RemoveParticipantGroupSecurity, _super);
    function RemoveParticipantGroupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], RemoveParticipantGroupSecurity.prototype, "oauth", void 0);
    return RemoveParticipantGroupSecurity;
}(SpeakeasyBase));
export { RemoveParticipantGroupSecurity };
var RemoveParticipantGroupRequest = /** @class */ (function (_super) {
    __extends(RemoveParticipantGroupRequest, _super);
    function RemoveParticipantGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveParticipantGroupPathParams)
    ], RemoveParticipantGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveParticipantGroupQueryParams)
    ], RemoveParticipantGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveParticipantGroupSecurity)
    ], RemoveParticipantGroupRequest.prototype, "security", void 0);
    return RemoveParticipantGroupRequest;
}(SpeakeasyBase));
export { RemoveParticipantGroupRequest };
var RemoveParticipantGroupResponse = /** @class */ (function (_super) {
    __extends(RemoveParticipantGroupResponse, _super);
    function RemoveParticipantGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RemoveParticipantGroupResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveParticipantGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RemoveParticipantGroupResponse.prototype, "conversation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveParticipantGroupResponse.prototype, "statusCode", void 0);
    return RemoveParticipantGroupResponse;
}(SpeakeasyBase));
export { RemoveParticipantGroupResponse };
