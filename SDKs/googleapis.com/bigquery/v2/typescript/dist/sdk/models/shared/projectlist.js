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
import { ProjectReference } from "./projectreference";
var ProjectListProjects = /** @class */ (function (_super) {
    __extends(ProjectListProjects, _super);
    function ProjectListProjects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyName" }),
        __metadata("design:type", String)
    ], ProjectListProjects.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ProjectListProjects.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ProjectListProjects.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numericId" }),
        __metadata("design:type", String)
    ], ProjectListProjects.prototype, "numericId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectReference" }),
        __metadata("design:type", ProjectReference)
    ], ProjectListProjects.prototype, "projectReference", void 0);
    return ProjectListProjects;
}(SpeakeasyBase));
export { ProjectListProjects };
var ProjectList = /** @class */ (function (_super) {
    __extends(ProjectList, _super);
    function ProjectList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], ProjectList.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ProjectList.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], ProjectList.prototype, "nextPageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projects", elemType: ProjectListProjects }),
        __metadata("design:type", Array)
    ], ProjectList.prototype, "projects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalItems" }),
        __metadata("design:type", Number)
    ], ProjectList.prototype, "totalItems", void 0);
    return ProjectList;
}(SpeakeasyBase));
export { ProjectList };
