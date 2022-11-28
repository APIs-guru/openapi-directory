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
import { RegionInfo } from "./regioninfo";
import { ReplicationSetStatusEnum } from "./replicationsetstatusenum";
// ReplicationSet
/**
 * The set of Regions that your Incident Manager data will be replicated to and the KMS key used to encrypt the data.
**/
var ReplicationSet = /** @class */ (function (_super) {
    __extends(ReplicationSet, _super);
    function ReplicationSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], ReplicationSet.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], ReplicationSet.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdTime" }),
        __metadata("design:type", Date)
    ], ReplicationSet.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionProtected" }),
        __metadata("design:type", Boolean)
    ], ReplicationSet.prototype, "deletionProtected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedBy" }),
        __metadata("design:type", String)
    ], ReplicationSet.prototype, "lastModifiedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", Date)
    ], ReplicationSet.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionMap", elemType: RegionInfo }),
        __metadata("design:type", Map)
    ], ReplicationSet.prototype, "regionMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ReplicationSet.prototype, "status", void 0);
    return ReplicationSet;
}(SpeakeasyBase));
export { ReplicationSet };
