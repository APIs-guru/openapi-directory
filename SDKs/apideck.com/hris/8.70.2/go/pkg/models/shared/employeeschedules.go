package shared



type EmployeeSchedules struct {
    Employee *Employee `json:"employee,omitempty"`
    Schedules []Schedule `json:"schedules,omitempty"`
    
}

