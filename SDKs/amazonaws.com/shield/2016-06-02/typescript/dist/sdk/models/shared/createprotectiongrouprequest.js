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
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";
import { Tag } from "./tag";
var CreateProtectionGroupRequest = /** @class */ (function (_super) {
    __extends(CreateProtectionGroupRequest, _super);
    function CreateProtectionGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Aggregation" }),
        __metadata("design:type", String)
    ], CreateProtectionGroupRequest.prototype, "aggregation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Members" }),
        __metadata("design:type", Array)
    ], CreateProtectionGroupRequest.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pattern" }),
        __metadata("design:type", String)
    ], CreateProtectionGroupRequest.prototype, "pattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProtectionGroupId" }),
        __metadata("design:type", String)
    ], CreateProtectionGroupRequest.prototype, "protectionGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceType" }),
        __metadata("design:type", String)
    ], CreateProtectionGroupRequest.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateProtectionGroupRequest.prototype, "tags", void 0);
    return CreateProtectionGroupRequest;
}(SpeakeasyBase));
export { CreateProtectionGroupRequest };
