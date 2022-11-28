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
// UserDeletionRequestId
/**
 * User ID.
**/
var UserDeletionRequestId = /** @class */ (function (_super) {
    __extends(UserDeletionRequestId, _super);
    function UserDeletionRequestId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UserDeletionRequestId.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], UserDeletionRequestId.prototype, "userId", void 0);
    return UserDeletionRequestId;
}(SpeakeasyBase));
export { UserDeletionRequestId };
// UserDeletionRequest
/**
 * JSON template for a user deletion request resource.
**/
var UserDeletionRequest = /** @class */ (function (_super) {
    __extends(UserDeletionRequest, _super);
    function UserDeletionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionRequestTime" }),
        __metadata("design:type", Date)
    ], UserDeletionRequest.prototype, "deletionRequestTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firebaseProjectId" }),
        __metadata("design:type", String)
    ], UserDeletionRequest.prototype, "firebaseProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", UserDeletionRequestId)
    ], UserDeletionRequest.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], UserDeletionRequest.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyId" }),
        __metadata("design:type", String)
    ], UserDeletionRequest.prototype, "propertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], UserDeletionRequest.prototype, "webPropertyId", void 0);
    return UserDeletionRequest;
}(SpeakeasyBase));
export { UserDeletionRequest };
// UserDeletionRequestInput
/**
 * JSON template for a user deletion request resource.
**/
var UserDeletionRequestInput = /** @class */ (function (_super) {
    __extends(UserDeletionRequestInput, _super);
    function UserDeletionRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firebaseProjectId" }),
        __metadata("design:type", String)
    ], UserDeletionRequestInput.prototype, "firebaseProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", UserDeletionRequestId)
    ], UserDeletionRequestInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], UserDeletionRequestInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyId" }),
        __metadata("design:type", String)
    ], UserDeletionRequestInput.prototype, "propertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], UserDeletionRequestInput.prototype, "webPropertyId", void 0);
    return UserDeletionRequestInput;
}(SpeakeasyBase));
export { UserDeletionRequestInput };
