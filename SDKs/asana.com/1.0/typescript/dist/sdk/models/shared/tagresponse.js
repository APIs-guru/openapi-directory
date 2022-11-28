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
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";
import { WorkspaceCompactInput } from "./workspacecompact";
export var TagResponseColorEnum;
(function (TagResponseColorEnum) {
    TagResponseColorEnum["DarkPink"] = "dark-pink";
    TagResponseColorEnum["DarkGreen"] = "dark-green";
    TagResponseColorEnum["DarkBlue"] = "dark-blue";
    TagResponseColorEnum["DarkRed"] = "dark-red";
    TagResponseColorEnum["DarkTeal"] = "dark-teal";
    TagResponseColorEnum["DarkBrown"] = "dark-brown";
    TagResponseColorEnum["DarkOrange"] = "dark-orange";
    TagResponseColorEnum["DarkPurple"] = "dark-purple";
    TagResponseColorEnum["DarkWarmGray"] = "dark-warm-gray";
    TagResponseColorEnum["LightPink"] = "light-pink";
    TagResponseColorEnum["LightGreen"] = "light-green";
    TagResponseColorEnum["LightBlue"] = "light-blue";
    TagResponseColorEnum["LightRed"] = "light-red";
    TagResponseColorEnum["LightTeal"] = "light-teal";
    TagResponseColorEnum["LightBrown"] = "light-brown";
    TagResponseColorEnum["LightOrange"] = "light-orange";
    TagResponseColorEnum["LightPurple"] = "light-purple";
    TagResponseColorEnum["LightWarmGray"] = "light-warm-gray";
})(TagResponseColorEnum || (TagResponseColorEnum = {}));
var TagResponse = /** @class */ (function (_super) {
    __extends(TagResponse, _super);
    function TagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], TagResponse.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers", elemType: UserCompact }),
        __metadata("design:type", Array)
    ], TagResponse.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], TagResponse.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], TagResponse.prototype, "permalinkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TagResponse.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", WorkspaceCompact)
    ], TagResponse.prototype, "workspace", void 0);
    return TagResponse;
}(SpeakeasyBase));
export { TagResponse };
var TagResponseInput = /** @class */ (function (_super) {
    __extends(TagResponseInput, _super);
    function TagResponseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], TagResponseInput.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagResponseInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", WorkspaceCompactInput)
    ], TagResponseInput.prototype, "workspace", void 0);
    return TagResponseInput;
}(SpeakeasyBase));
export { TagResponseInput };
