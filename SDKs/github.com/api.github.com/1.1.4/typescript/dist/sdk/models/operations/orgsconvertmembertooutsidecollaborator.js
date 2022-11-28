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
var OrgsConvertMemberToOutsideCollaboratorPathParams = /** @class */ (function (_super) {
    __extends(OrgsConvertMemberToOutsideCollaboratorPathParams, _super);
    function OrgsConvertMemberToOutsideCollaboratorPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], OrgsConvertMemberToOutsideCollaboratorPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], OrgsConvertMemberToOutsideCollaboratorPathParams.prototype, "username", void 0);
    return OrgsConvertMemberToOutsideCollaboratorPathParams;
}(SpeakeasyBase));
export { OrgsConvertMemberToOutsideCollaboratorPathParams };
var OrgsConvertMemberToOutsideCollaborator403ApplicationJson = /** @class */ (function (_super) {
    __extends(OrgsConvertMemberToOutsideCollaborator403ApplicationJson, _super);
    function OrgsConvertMemberToOutsideCollaborator403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], OrgsConvertMemberToOutsideCollaborator403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], OrgsConvertMemberToOutsideCollaborator403ApplicationJson.prototype, "message", void 0);
    return OrgsConvertMemberToOutsideCollaborator403ApplicationJson;
}(SpeakeasyBase));
export { OrgsConvertMemberToOutsideCollaborator403ApplicationJson };
var OrgsConvertMemberToOutsideCollaboratorRequest = /** @class */ (function (_super) {
    __extends(OrgsConvertMemberToOutsideCollaboratorRequest, _super);
    function OrgsConvertMemberToOutsideCollaboratorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsConvertMemberToOutsideCollaboratorPathParams)
    ], OrgsConvertMemberToOutsideCollaboratorRequest.prototype, "pathParams", void 0);
    return OrgsConvertMemberToOutsideCollaboratorRequest;
}(SpeakeasyBase));
export { OrgsConvertMemberToOutsideCollaboratorRequest };
var OrgsConvertMemberToOutsideCollaboratorResponse = /** @class */ (function (_super) {
    __extends(OrgsConvertMemberToOutsideCollaboratorResponse, _super);
    function OrgsConvertMemberToOutsideCollaboratorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsConvertMemberToOutsideCollaboratorResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsConvertMemberToOutsideCollaboratorResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OrgsConvertMemberToOutsideCollaboratorResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsConvertMemberToOutsideCollaborator403ApplicationJson)
    ], OrgsConvertMemberToOutsideCollaboratorResponse.prototype, "orgsConvertMemberToOutsideCollaborator403ApplicationJsonObject", void 0);
    return OrgsConvertMemberToOutsideCollaboratorResponse;
}(SpeakeasyBase));
export { OrgsConvertMemberToOutsideCollaboratorResponse };
