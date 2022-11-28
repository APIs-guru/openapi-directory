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
// SubjectTypesRepositoryLink
/**
 * A link to a resource related to this object.
**/
var SubjectTypesRepositoryLink = /** @class */ (function (_super) {
    __extends(SubjectTypesRepositoryLink, _super);
    function SubjectTypesRepositoryLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SubjectTypesRepositoryLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SubjectTypesRepositoryLink.prototype, "name", void 0);
    return SubjectTypesRepositoryLink;
}(SpeakeasyBase));
export { SubjectTypesRepositoryLink };
var SubjectTypesRepository = /** @class */ (function (_super) {
    __extends(SubjectTypesRepository, _super);
    function SubjectTypesRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", SubjectTypesRepositoryLink)
    ], SubjectTypesRepository.prototype, "events", void 0);
    return SubjectTypesRepository;
}(SpeakeasyBase));
export { SubjectTypesRepository };
// SubjectTypesTeamLink
/**
 * A link to a resource related to this object.
**/
var SubjectTypesTeamLink = /** @class */ (function (_super) {
    __extends(SubjectTypesTeamLink, _super);
    function SubjectTypesTeamLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SubjectTypesTeamLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SubjectTypesTeamLink.prototype, "name", void 0);
    return SubjectTypesTeamLink;
}(SpeakeasyBase));
export { SubjectTypesTeamLink };
var SubjectTypesTeam = /** @class */ (function (_super) {
    __extends(SubjectTypesTeam, _super);
    function SubjectTypesTeam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", SubjectTypesTeamLink)
    ], SubjectTypesTeam.prototype, "events", void 0);
    return SubjectTypesTeam;
}(SpeakeasyBase));
export { SubjectTypesTeam };
// SubjectTypesUserLink
/**
 * A link to a resource related to this object.
**/
var SubjectTypesUserLink = /** @class */ (function (_super) {
    __extends(SubjectTypesUserLink, _super);
    function SubjectTypesUserLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], SubjectTypesUserLink.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SubjectTypesUserLink.prototype, "name", void 0);
    return SubjectTypesUserLink;
}(SpeakeasyBase));
export { SubjectTypesUserLink };
var SubjectTypesUser = /** @class */ (function (_super) {
    __extends(SubjectTypesUser, _super);
    function SubjectTypesUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", SubjectTypesUserLink)
    ], SubjectTypesUser.prototype, "events", void 0);
    return SubjectTypesUser;
}(SpeakeasyBase));
export { SubjectTypesUser };
// SubjectTypes
/**
 * The mapping of resource/subject types pointing to their individual event types.
**/
var SubjectTypes = /** @class */ (function (_super) {
    __extends(SubjectTypes, _super);
    function SubjectTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository" }),
        __metadata("design:type", SubjectTypesRepository)
    ], SubjectTypes.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", SubjectTypesTeam)
    ], SubjectTypes.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", SubjectTypesUser)
    ], SubjectTypes.prototype, "user", void 0);
    return SubjectTypes;
}(SpeakeasyBase));
export { SubjectTypes };
