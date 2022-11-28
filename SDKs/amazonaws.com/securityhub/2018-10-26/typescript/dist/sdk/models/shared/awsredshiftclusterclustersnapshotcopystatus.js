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
// AwsRedshiftClusterClusterSnapshotCopyStatus
/**
 * Information about a cross-Region snapshot copy.
**/
var AwsRedshiftClusterClusterSnapshotCopyStatus = /** @class */ (function (_super) {
    __extends(AwsRedshiftClusterClusterSnapshotCopyStatus, _super);
    function AwsRedshiftClusterClusterSnapshotCopyStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationRegion" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterClusterSnapshotCopyStatus.prototype, "destinationRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ManualSnapshotRetentionPeriod" }),
        __metadata("design:type", Number)
    ], AwsRedshiftClusterClusterSnapshotCopyStatus.prototype, "manualSnapshotRetentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetentionPeriod" }),
        __metadata("design:type", Number)
    ], AwsRedshiftClusterClusterSnapshotCopyStatus.prototype, "retentionPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotCopyGrantName" }),
        __metadata("design:type", String)
    ], AwsRedshiftClusterClusterSnapshotCopyStatus.prototype, "snapshotCopyGrantName", void 0);
    return AwsRedshiftClusterClusterSnapshotCopyStatus;
}(SpeakeasyBase));
export { AwsRedshiftClusterClusterSnapshotCopyStatus };
