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
var UpdatePermissionGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdatePermissionGroupPathParams, _super);
    function UpdatePermissionGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionGroupId" }),
        __metadata("design:type", Number)
    ], UpdatePermissionGroupPathParams.prototype, "permissionGroupId", void 0);
    return UpdatePermissionGroupPathParams;
}(SpeakeasyBase));
export { UpdatePermissionGroupPathParams };
var UpdatePermissionGroupRequests = /** @class */ (function (_super) {
    __extends(UpdatePermissionGroupRequests, _super);
    function UpdatePermissionGroupRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.UpdatePermissionGroupRequest)
    ], UpdatePermissionGroupRequests.prototype, "updatePermissionGroupRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdatePermissionGroupRequest)
    ], UpdatePermissionGroupRequests.prototype, "updatePermissionGroupRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.UpdatePermissionGroupRequest)
    ], UpdatePermissionGroupRequests.prototype, "updatePermissionGroupRequest2", void 0);
    return UpdatePermissionGroupRequests;
}(SpeakeasyBase));
export { UpdatePermissionGroupRequests };
var UpdatePermissionGroupRequest = /** @class */ (function (_super) {
    __extends(UpdatePermissionGroupRequest, _super);
    function UpdatePermissionGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePermissionGroupPathParams)
    ], UpdatePermissionGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePermissionGroupRequests)
    ], UpdatePermissionGroupRequest.prototype, "request", void 0);
    return UpdatePermissionGroupRequest;
}(SpeakeasyBase));
export { UpdatePermissionGroupRequest };
var UpdatePermissionGroupResponse = /** @class */ (function (_super) {
    __extends(UpdatePermissionGroupResponse, _super);
    function UpdatePermissionGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePermissionGroupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PermissionGroupModel)
    ], UpdatePermissionGroupResponse.prototype, "permissionGroupModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePermissionGroupResponse.prototype, "statusCode", void 0);
    return UpdatePermissionGroupResponse;
}(SpeakeasyBase));
export { UpdatePermissionGroupResponse };
