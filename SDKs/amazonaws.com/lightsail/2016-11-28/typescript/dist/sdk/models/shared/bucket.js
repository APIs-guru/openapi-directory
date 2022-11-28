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
import { AccessRules } from "./accessrules";
import { ResourceLocation } from "./resourcelocation";
import { ResourceReceivingAccess } from "./resourcereceivingaccess";
import { BucketState } from "./bucketstate";
import { Tag } from "./tag";
// Bucket
/**
 * Describes an Amazon Lightsail bucket.
**/
var Bucket = /** @class */ (function (_super) {
    __extends(Bucket, _super);
    function Bucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ableToUpdateBundle" }),
        __metadata("design:type", Boolean)
    ], Bucket.prototype, "ableToUpdateBundle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessRules" }),
        __metadata("design:type", AccessRules)
    ], Bucket.prototype, "accessRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundleId" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Bucket.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], Bucket.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectVersioning" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "objectVersioning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readonlyAccessAccounts" }),
        __metadata("design:type", Array)
    ], Bucket.prototype, "readonlyAccessAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourcesReceivingAccess", elemType: ResourceReceivingAccess }),
        __metadata("design:type", Array)
    ], Bucket.prototype, "resourcesReceivingAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", BucketState)
    ], Bucket.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "supportCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Bucket.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Bucket.prototype, "url", void 0);
    return Bucket;
}(SpeakeasyBase));
export { Bucket };
