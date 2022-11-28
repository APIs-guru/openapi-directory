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
// UserTaskListResponseOwner
/**
 * The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.
**/
var UserTaskListResponseOwner = /** @class */ (function (_super) {
    __extends(UserTaskListResponseOwner, _super);
    function UserTaskListResponseOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], UserTaskListResponseOwner.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserTaskListResponseOwner.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], UserTaskListResponseOwner.prototype, "resourceType", void 0);
    return UserTaskListResponseOwner;
}(SpeakeasyBase));
export { UserTaskListResponseOwner };
// UserTaskListResponseWorkspace
/**
 * The workspace in which the user task list is located.
**/
var UserTaskListResponseWorkspace = /** @class */ (function (_super) {
    __extends(UserTaskListResponseWorkspace, _super);
    function UserTaskListResponseWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], UserTaskListResponseWorkspace.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserTaskListResponseWorkspace.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], UserTaskListResponseWorkspace.prototype, "resourceType", void 0);
    return UserTaskListResponseWorkspace;
}(SpeakeasyBase));
export { UserTaskListResponseWorkspace };
var UserTaskListResponse = /** @class */ (function (_super) {
    __extends(UserTaskListResponse, _super);
    function UserTaskListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], UserTaskListResponse.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserTaskListResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", UserTaskListResponseOwner)
    ], UserTaskListResponse.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], UserTaskListResponse.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", UserTaskListResponseWorkspace)
    ], UserTaskListResponse.prototype, "workspace", void 0);
    return UserTaskListResponse;
}(SpeakeasyBase));
export { UserTaskListResponse };
