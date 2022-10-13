package shared

type EmployeeSchedules struct {
	Employee  *Employee  `json:"employee"`
	Schedules []Schedule `json:"schedules"`
}
