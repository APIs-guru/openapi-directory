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
var ActivityListOrgEventsForAuthenticatedUserPathParams = /** @class */ (function (_super) {
    __extends(ActivityListOrgEventsForAuthenticatedUserPathParams, _super);
    function ActivityListOrgEventsForAuthenticatedUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ActivityListOrgEventsForAuthenticatedUserPathParams.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], ActivityListOrgEventsForAuthenticatedUserPathParams.prototype, "username", void 0);
    return ActivityListOrgEventsForAuthenticatedUserPathParams;
}(SpeakeasyBase));
export { ActivityListOrgEventsForAuthenticatedUserPathParams };
var ActivityListOrgEventsForAuthenticatedUserQueryParams = /** @class */ (function (_super) {
    __extends(ActivityListOrgEventsForAuthenticatedUserQueryParams, _super);
    function ActivityListOrgEventsForAuthenticatedUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ActivityListOrgEventsForAuthenticatedUserQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ActivityListOrgEventsForAuthenticatedUserQueryParams.prototype, "perPage", void 0);
    return ActivityListOrgEventsForAuthenticatedUserQueryParams;
}(SpeakeasyBase));
export { ActivityListOrgEventsForAuthenticatedUserQueryParams };
var ActivityListOrgEventsForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(ActivityListOrgEventsForAuthenticatedUserRequest, _super);
    function ActivityListOrgEventsForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityListOrgEventsForAuthenticatedUserPathParams)
    ], ActivityListOrgEventsForAuthenticatedUserRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ActivityListOrgEventsForAuthenticatedUserQueryParams)
    ], ActivityListOrgEventsForAuthenticatedUserRequest.prototype, "queryParams", void 0);
    return ActivityListOrgEventsForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { ActivityListOrgEventsForAuthenticatedUserRequest };
var ActivityListOrgEventsForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(ActivityListOrgEventsForAuthenticatedUserResponse, _super);
    function ActivityListOrgEventsForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ActivityListOrgEventsForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ActivityListOrgEventsForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], ActivityListOrgEventsForAuthenticatedUserResponse.prototype, "events", void 0);
    return ActivityListOrgEventsForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { ActivityListOrgEventsForAuthenticatedUserResponse };
