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
import { IncludeConditions } from "./includeconditions";
import { LinkedForeignAccount } from "./linkedforeignaccount";
import { LinkedForeignAccountInput } from "./linkedforeignaccount";
// RemarketingAudienceAudienceDefinition
/**
 * The simple audience definition that will cause a user to be added to an audience.
**/
var RemarketingAudienceAudienceDefinition = /** @class */ (function (_super) {
    __extends(RemarketingAudienceAudienceDefinition, _super);
    function RemarketingAudienceAudienceDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeConditions" }),
        __metadata("design:type", IncludeConditions)
    ], RemarketingAudienceAudienceDefinition.prototype, "includeConditions", void 0);
    return RemarketingAudienceAudienceDefinition;
}(SpeakeasyBase));
export { RemarketingAudienceAudienceDefinition };
// RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions
/**
 * Defines the conditions to exclude users from the audience.
**/
var RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions = /** @class */ (function (_super) {
    __extends(RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions, _super);
    function RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusionDuration" }),
        __metadata("design:type", String)
    ], RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions.prototype, "exclusionDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segment" }),
        __metadata("design:type", String)
    ], RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions.prototype, "segment", void 0);
    return RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;
}(SpeakeasyBase));
export { RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions };
// RemarketingAudienceStateBasedAudienceDefinition
/**
 * A state based audience definition that will cause a user to be added or removed from an audience.
**/
var RemarketingAudienceStateBasedAudienceDefinition = /** @class */ (function (_super) {
    __extends(RemarketingAudienceStateBasedAudienceDefinition, _super);
    function RemarketingAudienceStateBasedAudienceDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeConditions" }),
        __metadata("design:type", RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions)
    ], RemarketingAudienceStateBasedAudienceDefinition.prototype, "excludeConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeConditions" }),
        __metadata("design:type", IncludeConditions)
    ], RemarketingAudienceStateBasedAudienceDefinition.prototype, "includeConditions", void 0);
    return RemarketingAudienceStateBasedAudienceDefinition;
}(SpeakeasyBase));
export { RemarketingAudienceStateBasedAudienceDefinition };
// RemarketingAudience
/**
 * JSON template for an Analytics remarketing audience.
**/
var RemarketingAudience = /** @class */ (function (_super) {
    __extends(RemarketingAudience, _super);
    function RemarketingAudience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], RemarketingAudience.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceDefinition" }),
        __metadata("design:type", RemarketingAudienceAudienceDefinition)
    ], RemarketingAudience.prototype, "audienceDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceType" }),
        __metadata("design:type", String)
    ], RemarketingAudience.prototype, "audienceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], RemarketingAudience.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RemarketingAudience.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RemarketingAudience.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalWebPropertyId" }),
        __metadata("design:type", String)
    ], RemarketingAudience.prototype, "internalWebPropertyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], RemarketingAudience.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedAdAccounts", elemType: LinkedForeignAccount }),
        __metadata("design:type", Array)
    ], RemarketingAudience.prototype, "linkedAdAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedViews" }),
        __metadata("design:type", Array)
    ], RemarketingAudience.prototype, "linkedViews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RemarketingAudience.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateBasedAudienceDefinition" }),
        __metadata("design:type", RemarketingAudienceStateBasedAudienceDefinition)
    ], RemarketingAudience.prototype, "stateBasedAudienceDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], RemarketingAudience.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], RemarketingAudience.prototype, "webPropertyId", void 0);
    return RemarketingAudience;
}(SpeakeasyBase));
export { RemarketingAudience };
// RemarketingAudienceInput
/**
 * JSON template for an Analytics remarketing audience.
**/
var RemarketingAudienceInput = /** @class */ (function (_super) {
    __extends(RemarketingAudienceInput, _super);
    function RemarketingAudienceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], RemarketingAudienceInput.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceDefinition" }),
        __metadata("design:type", RemarketingAudienceAudienceDefinition)
    ], RemarketingAudienceInput.prototype, "audienceDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audienceType" }),
        __metadata("design:type", String)
    ], RemarketingAudienceInput.prototype, "audienceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RemarketingAudienceInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], RemarketingAudienceInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedAdAccounts", elemType: LinkedForeignAccountInput }),
        __metadata("design:type", Array)
    ], RemarketingAudienceInput.prototype, "linkedAdAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedViews" }),
        __metadata("design:type", Array)
    ], RemarketingAudienceInput.prototype, "linkedViews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RemarketingAudienceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateBasedAudienceDefinition" }),
        __metadata("design:type", RemarketingAudienceStateBasedAudienceDefinition)
    ], RemarketingAudienceInput.prototype, "stateBasedAudienceDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webPropertyId" }),
        __metadata("design:type", String)
    ], RemarketingAudienceInput.prototype, "webPropertyId", void 0);
    return RemarketingAudienceInput;
}(SpeakeasyBase));
export { RemarketingAudienceInput };
