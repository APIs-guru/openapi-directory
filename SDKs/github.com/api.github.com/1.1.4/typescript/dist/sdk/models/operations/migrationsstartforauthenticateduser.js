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
export var MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum;
(function (MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum) {
    MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum["Repositories"] = "repositories";
})(MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum || (MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum = {}));
var MigrationsStartForAuthenticatedUserRequestBody = /** @class */ (function (_super) {
    __extends(MigrationsStartForAuthenticatedUserRequestBody, _super);
    function MigrationsStartForAuthenticatedUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclude" }),
        __metadata("design:type", Array)
    ], MigrationsStartForAuthenticatedUserRequestBody.prototype, "exclude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclude_attachments" }),
        __metadata("design:type", Boolean)
    ], MigrationsStartForAuthenticatedUserRequestBody.prototype, "excludeAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lock_repositories" }),
        __metadata("design:type", Boolean)
    ], MigrationsStartForAuthenticatedUserRequestBody.prototype, "lockRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositories" }),
        __metadata("design:type", Array)
    ], MigrationsStartForAuthenticatedUserRequestBody.prototype, "repositories", void 0);
    return MigrationsStartForAuthenticatedUserRequestBody;
}(SpeakeasyBase));
export { MigrationsStartForAuthenticatedUserRequestBody };
var MigrationsStartForAuthenticatedUserRequest = /** @class */ (function (_super) {
    __extends(MigrationsStartForAuthenticatedUserRequest, _super);
    function MigrationsStartForAuthenticatedUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", MigrationsStartForAuthenticatedUserRequestBody)
    ], MigrationsStartForAuthenticatedUserRequest.prototype, "request", void 0);
    return MigrationsStartForAuthenticatedUserRequest;
}(SpeakeasyBase));
export { MigrationsStartForAuthenticatedUserRequest };
var MigrationsStartForAuthenticatedUserResponse = /** @class */ (function (_super) {
    __extends(MigrationsStartForAuthenticatedUserResponse, _super);
    function MigrationsStartForAuthenticatedUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MigrationsStartForAuthenticatedUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MigrationsStartForAuthenticatedUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], MigrationsStartForAuthenticatedUserResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Migration)
    ], MigrationsStartForAuthenticatedUserResponse.prototype, "migration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], MigrationsStartForAuthenticatedUserResponse.prototype, "validationError", void 0);
    return MigrationsStartForAuthenticatedUserResponse;
}(SpeakeasyBase));
export { MigrationsStartForAuthenticatedUserResponse };
