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
export var OrgsListMembershipsForAuthenticatedUserStateEnum;
(function (OrgsListMembershipsForAuthenticatedUserStateEnum) {
    OrgsListMembershipsForAuthenticatedUserStateEnum["Active"] = "active";
    OrgsListMembershipsForAuthenticatedUserStateEnum["Pending"] = "pending";
})(OrgsListMembershipsForAuthenticatedUserStateEnum || (OrgsListMembershipsForAuthenticatedUserStateEnum = {}));
var OrgsListMembershipsForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(OrgsListMembershipsForAuthenticatedUserQueryParams, _super);
    function OrgsListMembershipsForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], OrgsListMembershipsForAuthenticatedUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], OrgsListMembershipsForAuthenticatedUserQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", String)
    ], OrgsListMembershipsForAuthenticatedUserQueryParams.prototype, "state", void 0);
    return OrgsListMembershipsForAuthenticatedUserQueryParams;
}(SpeakeasyBase));
export { OrgsListMembershipsForAuthenticatedUserQueryParams };
var OrgsListMembershipsForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(OrgsListMembershipsForAuthenticatedUserRequest, _super);
    function OrgsListMembershipsForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OrgsListMembershipsForAuthenticatedUserQueryParams)
    ], OrgsListMembershipsForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    return OrgsListMembershipsForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { OrgsListMembershipsForAuthenticatedUserRequest };
var OrgsListMembershipsForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(OrgsListMembershipsForAuthenticatedUserResponse, _super);
    function OrgsListMembershipsForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OrgsListMembershipsForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OrgsListMembershipsForAuthenticatedUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OrgsListMembershipsForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], OrgsListMembershipsForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OrgMembership }),
        __metadata("design:type", Array)
    ], OrgsListMembershipsForAuthenticatedUserResponse.prototype, "orgMemberships", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], OrgsListMembershipsForAuthenticatedUserResponse.prototype, "validationError", void 0);
    return OrgsListMembershipsForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { OrgsListMembershipsForAuthenticatedUserResponse };
