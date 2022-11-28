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
import { CustomFieldSettingResponse } from "./customfieldsettingresponse";
export var PortfolioResponseColorEnum;
(function (PortfolioResponseColorEnum) {
    PortfolioResponseColorEnum["DarkPink"] = "dark-pink";
    PortfolioResponseColorEnum["DarkGreen"] = "dark-green";
    PortfolioResponseColorEnum["DarkBlue"] = "dark-blue";
    PortfolioResponseColorEnum["DarkRed"] = "dark-red";
    PortfolioResponseColorEnum["DarkTeal"] = "dark-teal";
    PortfolioResponseColorEnum["DarkBrown"] = "dark-brown";
    PortfolioResponseColorEnum["DarkOrange"] = "dark-orange";
    PortfolioResponseColorEnum["DarkPurple"] = "dark-purple";
    PortfolioResponseColorEnum["DarkWarmGray"] = "dark-warm-gray";
    PortfolioResponseColorEnum["LightPink"] = "light-pink";
    PortfolioResponseColorEnum["LightGreen"] = "light-green";
    PortfolioResponseColorEnum["LightBlue"] = "light-blue";
    PortfolioResponseColorEnum["LightRed"] = "light-red";
    PortfolioResponseColorEnum["LightTeal"] = "light-teal";
    PortfolioResponseColorEnum["LightBrown"] = "light-brown";
    PortfolioResponseColorEnum["LightOrange"] = "light-orange";
    PortfolioResponseColorEnum["LightPurple"] = "light-purple";
    PortfolioResponseColorEnum["LightWarmGray"] = "light-warm-gray";
})(PortfolioResponseColorEnum || (PortfolioResponseColorEnum = {}));
var PortfolioResponseWorkspace = /** @class */ (function (_super) {
    __extends(PortfolioResponseWorkspace, _super);
    function PortfolioResponseWorkspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], PortfolioResponseWorkspace.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PortfolioResponseWorkspace.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], PortfolioResponseWorkspace.prototype, "resourceType", void 0);
    return PortfolioResponseWorkspace;
}(SpeakeasyBase));
export { PortfolioResponseWorkspace };
var PortfolioResponse = /** @class */ (function (_super) {
    __extends(PortfolioResponse, _super);
    function PortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], PortfolioResponse.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PortfolioResponse.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", UserCompact)
    ], PortfolioResponse.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_field_settings", elemType: CustomFieldSettingResponse }),
        __metadata("design:type", Array)
    ], PortfolioResponse.prototype, "customFieldSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_on" }),
        __metadata("design:type", Date)
    ], PortfolioResponse.prototype, "dueOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], PortfolioResponse.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members", elemType: UserCompact }),
        __metadata("design:type", Array)
    ], PortfolioResponse.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PortfolioResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", UserCompact)
    ], PortfolioResponse.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permalink_url" }),
        __metadata("design:type", String)
    ], PortfolioResponse.prototype, "permalinkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], PortfolioResponse.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_on" }),
        __metadata("design:type", Date)
    ], PortfolioResponse.prototype, "startOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", PortfolioResponseWorkspace)
    ], PortfolioResponse.prototype, "workspace", void 0);
    return PortfolioResponse;
}(SpeakeasyBase));
export { PortfolioResponse };
