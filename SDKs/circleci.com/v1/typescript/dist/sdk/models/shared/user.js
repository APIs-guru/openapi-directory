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
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all_emails" }),
        __metadata("design:type", Array)
    ], User.prototype, "allEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analytics_id" }),
        __metadata("design:type", String)
    ], User.prototype, "analyticsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], User.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basic_email_prefs" }),
        __metadata("design:type", String)
    ], User.prototype, "basicEmailPrefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitbucket" }),
        __metadata("design:type", Number)
    ], User.prototype, "bitbucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitbucket_authorized" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "bitbucketAuthorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containers" }),
        __metadata("design:type", Number)
    ], User.prototype, "containers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=days_left_in_trial" }),
        __metadata("design:type", Number)
    ], User.prototype, "daysLeftInTrial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dev_admin" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "devAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enrolled_betas" }),
        __metadata("design:type", Array)
    ], User.prototype, "enrolledBetas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=github_id" }),
        __metadata("design:type", Number)
    ], User.prototype, "githubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=github_oauth_scopes" }),
        __metadata("design:type", Array)
    ], User.prototype, "githubOauthScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", Number)
    ], User.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heroku_api_key" }),
        __metadata("design:type", String)
    ], User.prototype, "herokuApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=in_beta_program" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "inBetaProgram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], User.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_prefs" }),
        __metadata("design:type", Map)
    ], User.prototype, "organizationPrefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallelism" }),
        __metadata("design:type", Number)
    ], User.prototype, "parallelism", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plan" }),
        __metadata("design:type", String)
    ], User.prototype, "plan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projects" }),
        __metadata("design:type", Map)
    ], User.prototype, "projects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pusher_id" }),
        __metadata("design:type", String)
    ], User.prototype, "pusherId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selected_email" }),
        __metadata("design:type", String)
    ], User.prototype, "selectedEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sign_in_count" }),
        __metadata("design:type", Number)
    ], User.prototype, "signInCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trial_end" }),
        __metadata("design:type", Date)
    ], User.prototype, "trialEnd", void 0);
    return User;
}(SpeakeasyBase));
export { User };
